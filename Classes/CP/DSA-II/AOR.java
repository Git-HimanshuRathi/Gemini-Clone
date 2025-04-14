public class AOR {
    // (1) TOWER OF HANOI
    // TC: O(2^N)   
    public static void TOH(int N, char S, char D, char T) {
        if(N==0) return;

        TOH(N-1, S, T, D);
        System.out.println("Moving " + N + " from " + S + " to " + D);
        TOH(N-1, T, D, S);
    }

    public static void main(String[] args) {
        
    }
}
