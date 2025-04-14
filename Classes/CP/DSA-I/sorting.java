import java.util.*;
public class sorting {
    static void printArray(int[] arr) {
        for(int i=0; i<arr.length; i++) {
            System.out.print(arr[i] +" ");
        }
        System.out.println();
    }
    

    // (1) Given an array with N elements. Array is sorted till index (N-2). Check if the array is sorted. If yes print the array else bring the last element to the correct index and print the sorted array.
    static void bringLastToCorrectPos(int[] A) {
        int N = A.length;
        if(A[N-1] > A[N-2]) {
            printArray(A);
        }
        else {
            int temp = A[N-1];
            int i=N-2;
            while(i>=0 && A[i] > temp) {
                A[i+1] = A[i];
                i--;
            }
            A[i+1] = temp;
            printArray(A);
        }
    }



    // (2) Given an array of size N. Array is sorted till index e (e<N-1). Bring A[e+1] in correct position.
    static void bringToCorrectPos(int[] A, int e) {
        if(A[e+1] > A[e]) {
            printArray(A);
        }
        else {
            int temp = A[e+1];
            int i=e;
            while(i>=0 && A[i] > temp) {
                A[i+1] = A[i];
                i--;
            }
            A[i+1] = temp;
            printArray(A);
        }
    }


    // (3) INSERTION SORT 
    static void insertionSort(int[] A) {
        for(int i=0; i<A.length-1; i++) {
            bringToCorrectPos(A, i);
        }
    }


    // (4) SELECTION SORT
    static void selectionSort(int[] A) {
        int N = A.length;

        for(int j=0; j<N; j++) {
            int min = A[j];
            for(int i=j; i<N; i++) {
                if(A[i]<min) {
                    min = A[i];
                    int temp = A[j];
                    A[j] = min;
                    A[i] = temp;
                }
            }
        }
        printArray(A);
    }


    // (5) BUBBLE SORT
    static void swapAdj(int[] A) {
        int N = A.length;  
        for(int j=0; j<N; j++){
            boolean swap = false;
            for(int i=0; i<N-1-j; i++) {
                if(A[i]>A[i+1]) {
                    int temp = A[i];
                    A[i] = A[i+1];
                    A[i+1] = temp;
                    swap = true;
                }               
            }
            if(swap==false) {
                break;
            }
        }
        printArray(A);
    }

    public static void main(String[] args){
        
    }
}
