import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class hashMap {
    // (1) Given an array and Q queries. For every query return the frequency of the element in the array.
    public static void findFrequency(int[] A, int[] B) {
        int N = A.length;
        int M = B.length;

        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0; i<N; i++) {
            if(map.containsKey(A[i])) {
                map.put(A[i], map.get(A[i])+1);
            }
            else {
                map.put(A[i], 1);
            }
        }

        for(int q=0; q<M; q++) {
            System.out.println(map.get(B[q]));
        }
    }


    // (2) Given an array. Find the count of duplicate pairs of elements.
    // TC: O(N)
    public static int findDupicateCount(int[] A) {
        int N = A.length;
        int count = 0;
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0; i<N; i++) {
            if(map.containsKey(A[i])) {
                count += map.get(A[i]);
                map.put(A[i], map.get(A[i])+1);
            }
            else {
                map.put(A[i], 1);
            }
        }
        return count;
    }


    // (3) Given an array. Count the number of pairs (i,j) such that A[i]+A[j]==k and i!=j.
    public static int findPairs(int[] A, int k) {
        int N = A.length;
        int count = 0;
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0; i<N; i++) {
            if(map.containsKey(k-A[i])) {
                count += map.get(k-A[i]);            
            }

            if(map.containsKey(A[i])) {
                map.put(A[i], map.get(A[i])+1);
            }
            else {
                map.put(A[i], 1);
            }   
        }
        return count;
    }


    // (4) Given an array. Return the first non-repeating element.
    public static int nonRepeating(int[] A) {
        int N = A.length;

        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0; i<N; i++) {
            if(map.containsKey(A[i])) {
                map.put(A[i], map.get(A[i])+1);
            }
            else {
                map.put(A[i], 1);
            }
        }
        for(int i=0; i<N; i++) {
            if(map.get(A[i]) == 1) {
                return A[i];
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        
    }
}
