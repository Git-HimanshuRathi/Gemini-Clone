import java.util.Scanner;

public class bubblesort {

    public static void bubbleSort(int[] A) {
        int N = A.length ;

        for(int i=0 ; i<N-1 ; i++){
            for(int j=0 ; j<N-1-i ; j++){
                if(A[j]>A[j+1]){
                    int temp = A[j];
                    A[j] = A[j+1] ;
                    A[j+1] = temp ;
                }
            }
        }
    }
        public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] A = new int[n];
        
        for (int i=0; i < n; i++) {
            A[i] = sc.nextInt();
        }
        bubbleSort(A);
        for (int i = 0; i < n; i++) {
            System.out.print(A[i] + " ");
        }
    }
}

