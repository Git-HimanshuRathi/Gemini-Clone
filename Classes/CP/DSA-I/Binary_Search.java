import java.util.Scanner;

public class Binary_Search {
    // (1) Given a sorted array and a target element. Find the index of target. If element is not present return -1.
    // TC: O(logN)
    public static int findTarget(int[] A, int target) {
        int N = A.length;
        int s = 0;
        int e = N-1;
        while(s <= e) {
            int mid = (s+e)/2;
            if(A[mid] == target) {
                return mid;
            }
            else if(A[mid] > target) {
                e = mid-1;
            }
            else if(A[mid] < target) {
                s = mid+1;
            }          
        }        
        return -1;
    }


    // (2) Given a sorted array (ascending) and a target. Count the frequency of target.
    public static int findFrequency(int[] A, int target) {
        int N = A.length;
        int s = 0;
        int e = N-1;

        int left = -1;
        while(s <= e) {
            int mid = (s+e)/2;
            if(A[mid] == target) {
                left = mid;
                e = mid-1;
            }
            else if(A[mid] > target) {
                e = mid-1;
            }
            else if(A[mid] < target) {
                s = mid+1;
            }
        } 
        
        s = 0;
        e = N-1;

        int right = -1;
        while(s <= e) {
            int mid = (s+e)/2;
            if(A[mid] == target) {
                right = mid;
                s = mid+1;
            }
            else if(A[mid] > target) {
                e = mid-1;
            }
            else if(A[mid] < target) {
                s = mid+1;
            }
        }

        if(left == -1 || right == -1) return -1;

        return right-left+1;
    }


    // (3) Given an array (sorted and then rotated) and a target. Find the index of the target.(all elements are distinct)
    public static int findIdxRotated(int[] A, int target) {
        int N = A.length;
        int s = 0;
        int e = N-1;

        int pivot = 0;
        while(s <= e) {
            int mid = (s+e)/2;
            if(A[mid] >= A[0]) {
                s = mid+1;
            }
            else if(A[mid] < A[0]) {
                pivot = mid;
                e = mid-1;
            }
        }
        
        if (target >= A[0] && (pivot==0 || target <= A[pivot-1])) {
            s = 0;
            e = (pivot == 0) ? N-1 : pivot-1;
        }
        else {
            s = pivot;
            e = N-1;
        }

        while(s <= e) {
            int mid = (s + e) / 2;
            if(A[mid] == target) {
                return mid;
            }
            else if(A[mid] > target) {
                e = mid-1;
            }
            else if(A[mid] < target) {
                s = mid+1;
            }          
        } 
        return -1;
    }


    // (4) Given an array (sorted and then rotated) and a target. Find the index of the target.(all elements are not distinct)
    public static int search(int[] A, int target) {
        int N = A.length;

        int s = 0;
        int e = N-1;

        while(s<=e) {
            int mid = s+(e-s)/2;
            
            if(A[mid] == target) return mid;

            if(A[s] == A[mid] && A[mid] == A[e]) {
                s++;
                e--;
            }
            else if(A[s] <= A[mid]) {
                if(target >= A[s] && target < A[mid]) {
                    e = mid-1;
                }
                else {
                    s = mid+1;
                }
            }
            else {
                if(target > A[mid] && target <= A[e]) {
                    s = mid+1;
                }
                else {
                    e = mid-1;
                }
            }
        }

        return -1;
    }


    // (5) Given an array (of distinct elements). Find any local minima (an element which is smaller than all available neighbours; i.e. adjacent elements) in the array.
    public static int localMinima(int[] A) {
        int N = A.length;

        if(A[0] < A[1]) return 0;
        if(A[N-1] < A[N-2]) return N-1;

        int s = 1;
        int e = N-2;
        while(s <= e) {
            int mid = (s+e)/2;
            if(A[mid]<A[mid-1] && A[mid]<A[mid+1]) {
                return mid;
            }
            else if(A[mid-1] < A[mid]) {
                e = mid-1;
            }
            else if(A[mid+1] < A[mid]) {
                s = mid+1;
            }
        }
        return -1;
    }


    // (6) Given an array where all the elements are present twice except one element. All duplicates are in consecutive index. Find the single number.
    public static int unique(int[] A) {
        int N = A.length;
        int s = 0;
        int e = N-1;

        while (s < e) {
            int mid = s+(e-s)/2;
            if (mid%2 == 1) {
                mid--;
            }

            if (A[mid] == A[mid+1]) {
                s = mid+2;
            } else {
                e = mid-1;
            }
        }

        return A[s];
    }

    public static void main(String[] args) {
        
    }
}
