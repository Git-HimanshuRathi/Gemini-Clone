import java.util.Scanner;

public class interviewQue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // QUE 1
        /*
         * Given a matrix of integers A of size N x M and multiple queries Q, for each
         * query, find and return the submatrix sum.
         * Inputs to queries are top left (b, c) and bottom right (d, e) indexes of
         * submatrix whose sum is to find out.
         * NOTE:
         * Rows are numbered from top to bottom, and columns are numbered from left to
         * right.
         * The sum may be large, so return the answer mod 109 + 7.
         * Also, select the data type carefully, if you want to store the addition of
         * some elements.
         * Indexing given in B, C, D, and E arrays is 1-based.
         * Top Left 0-based index = (B[i] - 1, C[i] - 1)
         * Bottom Right 0-based index = (D[i] - 1, E[i] - 1)
         */
        int N = matrix.length;
        int M = matrix[0].length;
        int [][]preSum = new int[N][M];
        preSum[0][0] = matrix[0][0] ;
        for (int j = 1; j < M; j++) {
            preSum[0][j] = preSum[0][j - 1] + matrix[0][j];
        }

        for (int i = 1; i < N; i++) {
            preSum[i][0] = preSum[i - 1][0] + matrix[i][0];
        }

        for (int i = 1; i < N; i++) {
            for (int j = 1; j < M; j++) {
                preSum[i][j] = matrix[i][j] + preSum[i - 1][j] + 
                            preSum[i][j - 1] - preSum[i - 1][j - 1];
            }
        }

        // QUE 2
        /* Given a 2-D matrix of size N*N Return sum of all possible sub matrix here */

        // int N = sc.nextInt();
        // int M = sc.nextInt();
        // int [][]A = new int [N][M] ;

        // for(int i = 0 ; i < N ; i++){
        // for(int j = 0 ; j < M ; j++){
        // A[i][j] = sc.nextInt();
        // }
        // }

        // int sum = 0 ;
        // for(int i = 0 ; i < N ; i++){
        // for(int j = 0 ; j < M ; j++){
        // sum += A[i][j] * (N-i) * (i+1) * (M-j) * (j+1) ;
        // }
        // }
        // System.out.println(sum);

        // QUE 3 Rain-water problem
        /*
         * Given an array of size N of non-negative number represting height of the
         * building
         * return the amount of water which will be trapped in between the buildings
         */

    //     int N = sc.nextInt();
    //     int[] arr = new int[N];

    //     for (int i = 0; i < N; i++) {
    //         arr[i] = sc.nextInt();
    //     }

    //     int[] maxLeft = new int[N];
    //     maxLeft[0] = 0;
    //     for (int i = 1; i < N; i++) {
    //         maxLeft[i] = Math.max(arr[i - 1], maxLeft[i - 1]);
    //     }

    //     int[] maxRyt = new int[N];
    //     maxRyt[N-1] = 0;
    //     for (int i = N-2 ; i >= 0 ; i--) {
    //         maxRyt[i] = Math.max(maxRyt[i+1], arr[i+1]);
    //     }

    //    int sum = 0 ;
    //    for(int i = 0 ; i < N ; i++){
    //      int min = Math.min(maxLeft[i],maxRyt[i]) - arr[i] ;  
    //       if(min >= 0 ){
    //         sum += min ;
    //       }
    //    }
    //    System.out.println(sum);
    }
}
