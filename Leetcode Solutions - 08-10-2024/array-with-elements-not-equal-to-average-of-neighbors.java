import java.util.Arrays;

class Solution {
    public int[] rearrangeArray(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        int[] ans = new int[n];
        boolean flag = true;
        int i = 0;
        int k = 0;
        int j = n - 1;
        while (i <= j) {
            ans[k++] = flag ? nums[i++] : nums[j--];
            flag = !flag;
        }
        return ans;

    }
}