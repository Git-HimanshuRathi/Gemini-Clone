import java.util.Scanner;

public class strtEnd {
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        int N = sc.nextInt();
        int A[] = new int[N];
        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
         }
        int Q = sc.nextInt();

        for(int j = 0 ; j < Q ; j++){
            int start = sc.nextInt();
            int end = sc.nextInt();
            int count = 0 ;
            while(start <= end){
                if(A[start]%2 == 0){
                    count++ ;
                }
                start++ ;
            }
            System.out.println(count);
        }
    }
}
