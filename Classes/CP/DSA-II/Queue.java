import java.util.*;

public class Queue {
    // (1) Generate Nth number using the digits 1,2,3.
    public static ArrayList<Integer> N_nums(int A) {
        ArrayList<Integer> result = new ArrayList<>();
        Queue<Integer> queue = new LinkedList<>();

        queue.add(1);
        queue.add(2);
        queue.add(3);
        
        while (result.size() < A) {
            int num = queue.poll();
            result.add(num);
            
            if (result.size() >= A) break;

            queue.add(num * 10 + 1);
            queue.add(num * 10 + 2);
            queue.add(num * 10 + 3);
        }
        
        return result;
    }
}
