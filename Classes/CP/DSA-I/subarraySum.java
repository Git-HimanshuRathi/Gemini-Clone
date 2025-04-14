import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class subarraySum {
    // (1) Given an array. Return count of distinct elements in every subarray of size k.
    public static int[] distinctElSubarray(int[] A, int k) {
        int N = A.length;

        int[] ans = new int[N-k+1];
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0; i<k; i++) {
            if(map.containsKey(A[i])) {
                map.put(A[i], map.get(A[i])+1);
            }
            else {
                map.put(A[i], 1);
            }
        }
        ans[0] = map.size();

        int s = 0;
        int e = k;
        while(e<N) {
            if(map.get(A[s])==1) {
                map.remove(A[s]);
            }
            else {
                map.put(A[s], map.get(A[s])-1);
            }

            if(map.containsKey(A[e])) {
                map.put(A[e], map.get(A[e])+1);
            }
            else {
                map.put(A[e], 1);
            }

            ans[s+1] = map.size();
            s++;
            e++;
        }

        return ans;
    }


    // (2) Given an array. Check if there exists a subarray with sum=0.
    // TC: O(N)
    public static boolean subArrSum(int[] A) {
        int N = A.length;

        if(A[0]==0) return true;

        int[] PS = new int[N];;
        PS[0] = A[0];
        for(int i=1; i<N; i++) {
            if(A[i]==0) return true;
            PS[i] = PS[i-1] + A[i];
            if(PS[i]==0) return true;
        }
        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=0; i<N; i++) {
            if(set.contains(PS[i])) {
                return true;
            }
            else {
                set.add(PS[i]);
            }
        }

        return false;
    }


    // (3) Find subarray with sum=k  =>  sum = PS[j] - PS[i-1], find a pair in PS array with difference k
    public static int subArrSumDiff(int[] A, int k) {
        int N = A.length;

        int PS[] = new int[N];
        PS[0] = A[0];
        for(int i=1; i<N; i++) {
            PS[i] = PS[i-1] + A[i];
        }

        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0; i<N; i++) {
            if(map.containsKey(A[i])) {
                map.put(A[i], map.get(A[i])+1);
            }
            else {
                map.put(A[i], 1);
            }
        }

        int count = 0;
        for(int num : map.keySet()) {
            if(k==0) {
                if(map.get(num) > 1) count++;
            }
            else {
                if(map.containsKey(num + k)) count++;
            }
        }

        return count;
    }


    // (4) Given an array. Check if there exists a subarray with sum divisible by k.
    public static boolean sumDivisible(int[] A, int k) {
        int N = A.length;

        if(A[0]%k==0) return true;

        int[] PS = new int[N];
        PS[0] = A[0];
        for(int i=1; i<N; i++) {
            PS[i] = PS[i-1] + A[i];
            if(PS[i]%k==0) return true;
        }

        for(int i=0; i<N; i++) {
            PS[i] = PS[i] % k;
        }
        
        HashSet<Integer> set = new HashSet<>();
        for(int i=0; i<N; i++) {
            if(set.contains(PS[i])) {
                return true;
            }
            else {
                set.add(PS[i]);
            }
        }
        return false;
    }



    public static void main(String[] args) {
        
    }
}
