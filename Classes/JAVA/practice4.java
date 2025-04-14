public class Solution {
    public ArrayList<Integer> solve(ArrayList<ArrayList<Integer>> A) {
     class Solution {
    public int removeElement(int[] nums, int val) {
        int n = nums.length;
        List<Integer> ans = new ArrayList<>();

        for (int i = 0; i < n - 1; i++) {
            if (nums[i] != val) {
                ans.add(nums[i]);
            }
        }  
        return ans.size();
    }
}
    }
}