import java.util.*;
public class subArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        int N = sc.nextInt();
        int A[] = new int[N];
    
        for (int i = 0; i < N; i++) {
           A[i] = sc.nextInt();
        }
        for(int i = 0 ; i < N ; i++){
            for(int j = i ; j < N ; j++){
                for(int k = i ; k <= j ; k++){
                    System.out.print(A[k]+" ");
                }
                System.out.println();
            }
        }
    }
}
