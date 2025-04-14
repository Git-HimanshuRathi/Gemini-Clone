import java.util.Scanner;

public class selectionsort {

    public static void selectionSort(int[] arr) {

        int n = arr.length;
        for(int i=0 ; i<n-1 ;i++){
            int minVal = i ;
            for (int j=i ; j<n; j++) {
                if (arr[j] < arr[minVal]) {
                   minVal=j;
                }
            }
            int temp = arr[minVal];
            arr[minVal] = arr[i];
            arr[i] = temp;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        selectionSort(arr);
        for (int i = 0; i < n; i++){
            System.out.print(arr[i] + " ");
        }
    }
}