import java.util.*;

public class MergeSort {
    // (1) Given 2 sorted arrays. Merge them into a single sorted array.
    public static int[] mergeSortedArray(int[] A, int[] B) {
        int N = A.length, M = B.length;
        int[] C = new int[N+M];
        int i=0, j=0, k=0;

        while(i<N && j<M) {
            if(A[i] < B[j]) {
                C[k++] = A[i++];
            } else {
                C[k++] = B[j++];
            }
        }

        while(i<N) C[k++] = A[i++];
        while(j<M) C[k++] = B[j++];
        
        return C;
    }


    // (2) Given an array and 3 index l,m,r. Given that subarray from l to m is sorted and subarray from m+1 to r is sorted. Sort the subarray from l to r.
    // TC: O(N)  
    public static void merge(int[] A, int l, int m, int r) {
        int N1 = m-l+1;
        int N2 = r-m;
        int[] L = new int[N1], R = new int[N2];

        for(int i=0; i<N1; i++) L[i] = A[l+i];
        for(int j=0; j<N2; j++) R[j] = A[m+1+j];

        int i=0, j=0, k=l;

        while(i<N1 && j<N2) {
            if(L[i] < R[j]) {
                A[k++] = L[i++];
            } else {
                A[k++] = R[j++];
            }
        }

        while(i<N1) A[k++] = L[i++];
        while(j<N2) A[k++] = R[j++];
    }


    // (3) MERGE SORT
    // TC: O(NlogN)    SC: O(N) 
    public static void mergeSort(int[] A, int l, int r) {
        if(l==r) return;
        int m = l+(r-l)/2;
        mergeSort(A, l, m);
        mergeSort(A, m+1, r);
        merge(A, l, m, r);
    }


    // (4) QUICK SORT
    // TC: O(N)    SC: O(1)
    public static int partition(int[] A, int s, int e) {
        int l=s+1, r=e;
        while(l <= r) {
            if(A[l] <= A[s]) {
                l++;
            } else if(A[r] > A[s]) {
                r--;
            } else {
                int temp = A[l];
                A[l] = A[r];
                A[r] = temp;
                l++;
                r--;
            }
        }

        int temp = A[s];
        A[s] = A[r];
        A[r] = temp;

        return r;
    }
    public static void quickSort(int[] A, int s, int e) {
        if(s>=e) return;
        int p = partition(A, s, e);
        quickSort(A, s, p-1);
        quickSort(A, p+1, e);
    }
    
    public static void main(String[] args) {        

    }
}
