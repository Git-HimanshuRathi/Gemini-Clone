import java.util.*;

public class subarrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // // (1) Print all the subarrays of the given array.
        // int N = sc.nextInt();
        // int[] A = new int[N];                

        // for(int i=0; i<N; i++) {
        //     A[i] = sc.nextInt();
        // }

        // for(int start=0; start<N; start++) {
        //     for(int end=start; end<N; end++) {
        //         for(int i=start; i<=end; i++) {
        //             System.out.print(A[i] + " ");
        //         }
        //         System.out.println();
        //     }
        // }



        // // (2) Given an array. Print sum of all subarrays.
        // int[] A = {1, 2, 3, 4, 5, 6};
        // int N = A.length;
        // for(int s=0; s<N; s++) {
        //     int sum=0;
        //     for(int e=s; e<N; e++) {
        //         sum+=A[e];
        //         System.out.println(sum);
        //     }
        // }



        // // (3) Given an array. Print the cumulative sum of all the subarrays.
        // int[] A = {1, 2, 3, 4};        
        // int N = A.length;
        // int sum=0;
        // for(int i=0; i<N; i++) {
        //     sum += ((N-i) * (i+1)) * A[i];
        // }
        // System.out.println(sum);



        // // (4) Given an array. Given Q queries s,e. Print the sum of subarray from s to e.
        // int N = sc.nextInt();
        // int[] A = new int[N];

        // for(int i=0; i<N; i++) {
        //     A[i] = sc.nextInt();
        // }

        // int[] PS = new int[N];

        // PS[0] = A[0];
        // for(int i=1; i<N; i++) {
        //     PS[i] = PS[i-1] + A[i]; 
        // }

        // int Q = sc.nextInt();

        // for(int q=0; q<Q; q++) {
        //     int s = sc.nextInt();
        //     int e = sc.nextInt();

        //     if(s==0) {
        //         System.out.println(PS[e]);
        //     }
        //     else {
        //         System.out.println(PS[e] - PS[s-1]);
        //     }
        // }


        // // (5) Given an array return the max sum of any subarray of size k.
        // int k = sc.nextInt();
        // int N = sc.nextInt();
        // int[] A = new int[N];

        // for(int i=0; i<N; i++) {
        //     A[i] = sc.nextInt();
        // }

        // int sum = 0;
        // for(int i=0; i<k; i++) {
        //     sum+=A[i];
        // }

        // int s=0, e=k;
        // int maxSum = sum;
        // while(e<N) {
        //     sum = sum - A[s] + A[e];
        //     maxSum = Math.max(sum, maxSum);
        //     s++;
        //     e++; 
        // }

        // System.out.println(maxSum);


        // // (6) Given an array initialized with zeroes. Given Q queries of the form (s, val). To process a query add 'val' to all index from [s to N-1]. Return the final state of the array.
        // int N = sc.nextInt();
        // int[] A = new int[N];

        // int Q = sc.nextInt();
        
        // for(int q=0; q<Q; q++) {
        //     int s = sc.nextInt();
        //     int val = sc.nextInt();

        //     A[s] += val;
        // }

        // int[] PS = new int[N];
        // PS[0] = A[0];
        // for(int i=1; i<N; i++) {
        //     PS[i] = PS[i-1] + A[i];
        // }

        // for(int i=0; i<N; i++) {
        //     System.out.print(PS[i] + " ");
        // }
    }
}
