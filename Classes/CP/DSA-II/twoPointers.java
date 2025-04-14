public class twoPointers {
    // (1) Given an array sorted in ascending order (use this info to optimize). Find the number of pairs i,j such that i != j and A[i] + A[j] = k.
    // TC: O(N)    SC: O(1)
    public static int sumPairs(int[] A, int k) {
        int N = A.length;
        int i=0, j=N-1, count=0;

        while(i < j) {
            if((A[i]+A[j]) > k) {
                j--;
            } else if ((A[i]+A[j]) < k) {
                i++;
            } else {
                count++;
                i++;
                j--;
            }
        }

        return count;
    }


    // (2) Given an array sorted in ascending order. Check if there exists a pair i,j such that i != j and A[i] - A[j] = k (k>=0) / (i>j).
    public static int diffPairs(int[] A, int k) {
        int N = A.length;
        int i=0, j=1, count=0;

        while(j < N) {
            if(A[j]-A[i] > k) {
                i++;
            }
            else if(A[j]-A[i] < k) {
                j++;
            }
            else if(A[j]-A[i] == k && i != j){
                count++;
                i++;
            }

            if(i==j) j++;
        }

        return count;
    }


    // (3) Given 3 sorted arrays; A,B,C. Find i,j,k such that MAX(A[i],B[j],C[k]) - MIN(A[i],B[j],C[k]) is minimized.
    public static int max(int x, int y, int z) {
        if(x>=y && x>=z) return x;
        else if(y>=x && y>=z) return y;
        else return z;
    }

    public static int min(int x, int y, int z) {
        if(x<=y && x<=z) return x;
        else if(y<=x && y<=z) return y;
        else return z;
    }

    public static int maxmin(int[] A, int[] B, int[] C) {
        int i=0, j=0, k=0;
        int min, max, diff=Integer.MAX_VALUE;

        while(i<A.length && j<B.length && k<C.length) {
            min = min(A[i], B[j], C[k]);
            max = max(A[i], B[j], C[k]);
            diff = Math.min((max-min), diff);
            
            if(A[i]<=B[j] && A[i]<=C[k]) i++;
            else if(B[j]<=A[i] && B[j]<=C[k]) j++;
            else k++;
        }

        return diff;
    }


    
    public static void main(String[] args) {
        
    }
}
