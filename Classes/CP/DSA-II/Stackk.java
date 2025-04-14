import java.util.*;

public class Stackk {
    // (1) Given a string. Remove all consecutive pair of duplicate characters recursively.
    // TC: O(N)
    public static String removeDuplicates(String s) {
        Stack<Character> st = new Stack<>();

        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);

            if(st.isEmpty() || st.peek() != ch) st.push(ch); 
            else st.pop();
        }

        StringBuilder sb = new StringBuilder();
        while(!st.isEmpty()) {            
            sb.append(st.pop());            
        }

        return sb.reverse().toString();
    }


    // (2) Given an array. For every index i find the nearest (wrt index) smaller element on the left side of i. [0, i-1] (smaller than A[i])
    // TC: O(N)    SC: O(N)
    public static int[] prevSmallNum(int[] A) {
        int N = A.length;
        int[] arr = new int[N];
        Stack<Integer> st = new Stack<>();

        for(int i=0; i<N; i++) {
            while(!st.empty() && st.peek() >= A[i]) {
                st.pop();
            }

            if(st.isEmpty()) {
                arr[i] = -1;                
            }
            else if(!st.isEmpty() && st.peek() < A[i]) {
                arr[i] = st.peek();                
            } 
            st.push(A[i]);
        }

        return arr;
    }


    // (3) Given an array. For every index i find the index of the nearest (wrt index) smaller element on the left side of i. [0, i-1] (smaller than A[i])
    public static int[] prevSmallIdx(int[] A) {
        int N = A.length;
        int[] arr = new int[N];
        Stack<Integer> st = new Stack<>();

        for(int i=0; i<N; i++) {
            while(!st.empty() && A[st.peek()] >= A[i]) {
                st.pop();
            }

            if(st.isEmpty()) {
                arr[i] = -1;                
            }
            else if(!st.isEmpty() && A[st.peek()] < A[i]) {
                arr[i] = st.peek();                
            } 
            st.push(i);
        }

        return arr;
    }
    

    // (4) Given an array with lengths of the bars of a histogram. 
    // TC: O(N)
    public static int maxArHist(int[] A) {
        int N = A.length;

        int[] NSL = new int[N];
        Stack<Integer> st = new Stack<>();
        for(int i=0; i<N; i++) {
            while(!st.isEmpty() && A[st.peek()] >= A[i]) {
                st.pop();
            }
            NSL[i] = st.isEmpty() ? -1 : st.peek();
            st.push(i);
        }

        st.clear();
        int[] NSR = new int[N];
        for(int i=N-1; i>=0; i--) {
            while(!st.isEmpty() && A[st.peek()] >= A[i]) {
                st.pop();
            }
            NSR[i] = st.isEmpty() ? N : st.peek();
            st.push(i);
        }

        int maxArea = 0;
        for(int i=0; i<N; i++) {
            int width = NSR[i] - NSL[i] - 1;
            int area = A[i] * width;
            maxArea = Math.max(area, maxArea);
        }

        return maxArea;
    }
    
    public static void main(String[] args) {
        
    }
}
