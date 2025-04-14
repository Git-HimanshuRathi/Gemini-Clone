import java.util.ArrayList;
public class practice5 {

    static ArrayList<Integer> solve(ArrayList<Integer> A) {
        ArrayList<Integer> ans = new ArrayList<Integer>();

        for (int i = 0; i < A.size(); i++) {
            int count = 0;
            for (int j = 0; j < A.size(); j++) {
                if (A.get(i).equals(A.get(j))) {
                    count++;
                }
            }
            if (count == 1) {
                ans.add(A.get(i));
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        
        ArrayList<Integer> A = new ArrayList<Integer>();
        while(A.get()!=-1){
            
        A.add(200);
        }
        ArrayList<Integer> result = solve(A);
        System.out.println(result);
    }

}
