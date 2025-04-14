import java.util.*;

public class BitManipulation {
    // (1) Given an array where all numbers appear 2 times except exactly 1 number
    // which is present only once. Find the single number.
    // TC: O(N) SC: O(1)

    public static int unique(int[] A) {
        int ans = 0;
        for (int i = 0; i < A.length; i++) {
            ans ^= A[i];
        }
        return ans;
    }

    // (2) Check if the ith bit is set(1) or unset(0).

    public static boolean checkBit(int A, int i) {
        return ((1 << i) & A) > 0;
    }

    // (3) Set the ith bit.
    
    public static int setBit(int A, int i) {
        return ((1 << i) | A);
    }

    // (4) Given an array of N-1 numbers having all the numbers in the range [1,N]
    // except one number. Find the missing number.
    // TC: O(N)
    public static int missingNum(int[] A) {
        int N = A.length;
        int missing = 0;

        for (int i = 0; i < N; i++) {
            missing ^= A[i];
        }
        for (int i = 1; i <= N; i++) {
            missing ^= i;
        }

        return missing;
    }

    // (5) Given an array where all the numbers are present two times except two
    // single numbers. Return both the numbers.
    public static int getSetBit(int N) {
        for (int i = 0; i < 32; i++) {
            if (((1 << i) & N) > 0)
                return i;
        }

        return -1;
    }

    public static int[] uniqueNums2(int[] A) {
        int N = A.length;
        int xor = 0;

        for (int i = 0; i < N; i++) {
            xor ^= A[i];
        }

        int p = getSetBit(xor);
        int ans1 = 0, ans2 = 0;
        for (int i = 0; i < N; i++) {
            if (((1 << p) & A[i]) > 0) {
                ans1 ^= A[i];
            } else {
                ans2 ^= A[i];
            }
        }

        return new int[] { ans1, ans2 };
    }

    // (6) Given an array where all the elements appear 3 times except 1 element
    // which is present only once. Find the single number.

    public static int single(int[] A) {
        int N = A.length;

        int ans = 0;
        for (int i = 0; i < 32; i++) {
            int count = 0;
            for (int j = 0; j < N; j++) {
                if (((1 << i) & A[j]) > 0)
                    count++;
            }

            if (count % 3 != 0) {
                ans = ans | (1 << i);
            }
        }

        return ans;
    }

    // (7) HAMMING DISTANCE
    // TC: O(N)
    public static int HD(int[] A) {
        int N = A.length;
        int ans = 0;

        for (int i = 0; i < 32; i++) {
            int count = 0;
            for (int j = 0; j < N; j++) {
                if (((1 << i) & A[j]) > 0) {
                    count++;
                }
            }

            ans += count * (N - count);
        }

        return ans;
    }

    // (8) Given an array. Return the min XOR of any two numbers in the array.
    // TC: O(N)
    public static int minXOR(int[] A) {
        Arrays.sort(A);
        int N = A.length;
        int ans = Integer.MAX_VALUE;

        for (int i = 0; i < N - 1; i++) {
            ans = Math.min(ans, (A[i] ^ A[i + 1]));
        }

        return ans;
    }

    // (9) Given an array. Return the max & pair.
    public static int maxAnd(int[] A) {
        int N = A.length;
        int ans = 0;

        for (int i = 31; i >= 0; i--) {
            int count = 0;
            for (int j = 0; j < N; j++) {
                if (((1 << i) & A[j]) > 0) {
                    count++;
                }
            }

            if (count >= 2) {
                ans = ((1 << i) | ans);
                for (int j = 0; j < N; j++) {
                    if (!(((1 << i) & A[j]) > 0)) {
                        A[j] = 0;
                    }
                }
            }
        }

        return ans;
    }
}
