import java.util.*;
public class subarrays_2D {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // (1) Given a matrix and Q queries. Each query having Top Left(i, j) and Bottom Right(p, q). Return the sum of submatrix from Top Left and Bottom Right.

        int N = sc.nextInt();
        int M = sc.nextInt();

        int[][] A = new int[N][M];

        for(int i=0; i<N; i++) {
            for(int j=0; j<M; j++) {
                A[i][j] = sc.nextInt();
            }
        }

        int[][] PS = new int[N][M];
        for(int i=0; i<N ; i++) {
            PS[i][0] = A[i][0];
            for(int j=1; j<M; j++) {
                PS[i][j] = PS[i][j-1] + A[i][j];
            }
        }
        for(int j=0; j<M; j++) {
            PS[0][j] = PS[0][j];
            for(int i=1; i<N; i++) {
                PS[i][j] = PS[i-1][j] + PS[i][j];
            }
        }

        int Q = sc.nextInt();
        for(int q=0; q<Q; q++) {
            int TL_i = sc.nextInt();
            int TL_j = sc.nextInt();
            int BR_i = sc.nextInt();
            int BR_j = sc.nextInt();

            int ans;
            if(TL_i == 0 && TL_j == 0) {
                ans = PS[BR_i][BR_j];
            }
            else if(TL_i == 0) {
                ans = PS[BR_i][BR_j] - PS[BR_i][TL_j-1];
            }
            else if(TL_j == 0) {
                ans = PS[BR_i][BR_j] - PS[TL_i-1][BR_j];
            }            
            else {
                ans = PS[BR_i][BR_j] - PS[BR_i][TL_j-1] - PS[TL_i-1][BR_j] + PS[TL_i-1][TL_j-1];
            }
            System.out.println(ans);
        }


        

        // // (2) Given a matrix of size N*N. Return the sum of all the possible sub-matrix.
        // int N = sc.nextInt();
        // int M = sc.nextInt();

        // int[][] A = new int[N][M];

        // for(int i=0; i<N; i++) {
        //     for(int j=0; j<M; j++) {
        //         A[i][j] = sc.nextInt();
        //     }
        // }

        // int sum = 0;
        // for(int i=0; i<N; i++) {
        //     for(int j=0; j<M; j++) {
        //         sum += A[i][j] * (i+1) * (j+1) * (N-i) * (M-j);
        //     }
        // }

        // System.out.println(sum);
    }
}
