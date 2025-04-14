import java.util.Scanner;

public class sumOfSubArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int A[] = new int[N];
        int sum = 0;
        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
        }

        // METHOD 1             

        int sumOfall = 0;
        for (int start = 0; start < N; start++) {
            sum = 0;
            for (int end = start; end < N; end++) {
                sum += A[end];
                System.out.println(sum);
                sumOfall += sum;
            }
        }
        System.out.println(sumOfall);

        // METHOD 2

        for (int i = 1; i < N; i++) {
            sum += A[i] * (i + 1) * (N - i);
        }
        System.out.println(sum);
    }
}

// for(int i = 0 ; i < N ; i++){
// sum += (A[i]*(i+1)*(N-i))
// }
