import java.util.Scanner;

public class Recursion {
    // (1) Sum of first N natural numbers
    // TC: O(N)    SC: O(N)
    public static int sum(int N) {
        if(N==1) return 1;
        return N + sum(N-1);
    }


    // (2) Factorial of N
    public static int facto(int N) {
        if(N==1) return 1;
        return N*facto(N-1);
    }


    // (3) Nth fibonacci number
    // TC: O(2^N)    SC: O(N)
    public static int fib(int N) {
        if(N<=2) return 1;
        return fib(N-2) + fib(N-1);
    }


    // (4) Given a number. Return the sum of digits using recursion.
    public static int sumOfDigits(int N) {
        if(N==0) return 0;
        return (N%10) + sumOfDigits(N/10);
    }


    // (5) Given a string. Check if it is a palindrome.
    // TC: O(N)    SC: O(N)
    public static boolean isPalin(String A, int s, int e) {
        if(s>=e) return true;
        if(A.charAt(s) != A.charAt(e)) return false;
        return isPalin(A, s+1, e-1);
    }

    
    public static void main(String[] args) {
        
    }
}
