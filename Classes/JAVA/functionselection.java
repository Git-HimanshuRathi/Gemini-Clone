import java.util.*;
public class functionselection {
      static void sort(int A[]){
        for(int i =0;i<A.length-1;i++){
            
            for(int j=i;j<A.length;j++){

               if(A[i]>A[j]){
                int temp=A[i];
                A[i]=A[j];
                A[j]=temp;
                
               }
            }
        }
      }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int N=sc.nextInt();
        int A[]=new int[N];

      for(int i=0;i<A.length;i++){
        A[i]=sc.nextInt();
      }
       sort(A);
       for(int i=0;i<A.length;i++){
        System.out.print(A[i]);
      }

    }
}