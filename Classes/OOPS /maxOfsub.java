import java.util.Scanner;

public class maxOfsub {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] A = new int[N];
        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
        }
        int K = sc.nextInt();
        int Sum = 0;
        for (int i = 0; i < K; i++) {
            Sum += A[i];
        }
        int maxSum = Sum;
        int start = 0;
        int end = K;
        while (end < N) {
            Sum = Sum - A[start] + A[end];
            maxSum = Math.max(Sum, maxSum);
            end++;
            start++;
        }
        System.out.println(maxSum);
    }
}
