import java.util.Scanner;

public class googleQue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] A = new int[N];
    
        int Q = sc.nextInt();
        for (int i = 0; i < Q; i++) {
            int start = sc.nextInt();
            int end = sc.nextInt();
            int val = sc.nextInt();
               A[start] += val ;
               if(end < N-1) A[end+1] -= val ;
        }
        int[] ps = new int[N];
        ps[0] = A[0];
        for (int i = 1 ; i < N ; i++) {
            ps[i] = ps[i - 1] + A[i];
        }

        for (int i = 0; i < N ; i++) {
            System.out.print(A[i] + " ");
        }
    }
}
