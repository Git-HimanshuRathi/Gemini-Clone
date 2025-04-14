import java.util.ArrayList;

public class SpriralMatrix {
    public ArrayList<ArrayList<Integer>> generateMatrix(int A) {
        ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
        
        for (int i=0; i<A; i++) {
            ArrayList<Integer> row = new ArrayList<>();
            for (int j=0; j<A; j++) {
                row.add(0);
            }
            arr.add(row);
        }
        int left = 0;
        int right = A - 1;
        int bottom = A - 1;
        int top = 0;
        int count = 1;

        while (left<=right && top<=bottom) {

            for (int i = left; i <= right; i++) {
                arr.get(top).set(i, count);
                count++;
            }
            top++;

            for (int i = top; i <= bottom; i++) {
                arr.get(i).set(right, count);
                count++;
            }
            right--;

            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    arr.get(bottom).set(i, count);
                    count++;
                }
                bottom--;
            }

            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    arr.get(i).set(left, count);
                    count++;
                }
                left++;
            }
        }
        return arr;
    }
}