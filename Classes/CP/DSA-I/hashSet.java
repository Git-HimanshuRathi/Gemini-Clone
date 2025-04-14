import java.util.ArrayList;
import java.util.Scanner;
import java.util.HashSet;

public class hashSet {
    // (1) Given an array. Check if the target is present in the array if Q targets are given in an array.
    public static void checkTarget(int[] A, int[] B) {
        int N = A.length;

        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=0; i<N; i++) {
            set.add(A[i]);
        }

        int Q = B.length;
        for(int i=0; i<Q; i++) {
            System.out.println(set.contains(B[i]));
        }
    }


    // (2) Count the number of distinct elements in an array.
    // TC: O(1)    SC: O(N)
    public static int distinctElementCount(int[] A) {
        int N = A.length;
        HashSet<Integer> set = new HashSet<Integer>();

        for(int i=0; i<N ; i++) {
            set.add(A[i]);
        }
        return set.size();
    }


    // (3) Given two arrays having distinct elements. Find the intersection of the arrays.
    public static ArrayList<Integer> intersectionSet(int[] A, int[] B) {
        int N = A.length;
        int M = B.length;

        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=0; i<N; i++) {
            set.add(A[i]);
        }

        ArrayList<Integer> ans = new ArrayList<Integer>();
        for(int i=0; i<M; i++) {
            if(set.contains(B[i])) {
                ans.add(B[i]);
            }
        }

        return ans;
    }


    // (4) Given an array of elements and a target k. Check if there exists a pair of elements A[i] and A[j], such that A[i]+A[j]==k and i!=j.
    // TC: O(N)    SC: O(N)
    public static boolean checkPair(int[] A, int k) {
        int N = A.length;

        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=0; i<N; i++) {
            int pair = k-A[i];
            if(set.contains(pair)) {
                return true;
            }
            set.add(A[i]);
        }
        return false;
    }

    public static void main(String[] args) {
        
    }
}
