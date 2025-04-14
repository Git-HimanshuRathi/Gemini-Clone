public class insertionsort {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5} ;
        insertion(arr) ;
    }
    static void insertion(int[] arr, int a ){
       int temp = arr[a+1] ;
       int i = a ;
       while(i>=0 && arr[i]>temp){
        arr[i+1] = arr[i] ;
        i-- ;
       }
       arr[i+1] = temp ;
   
       }
       
    }
