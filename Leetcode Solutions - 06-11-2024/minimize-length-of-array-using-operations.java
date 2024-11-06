class Solution {
    public int minimumArrayLength(int[] nums) {
        int min = nums[0];
        for (int i = 0; i < nums.length; i++)
            min = Math.min(min, nums[i]);
        for (int n : nums) {
            if (n % min > 0)
                return 1;
        }
        int count = 0;
        for (int i : nums) {
            if (i == min)
                count++;
        }
        return (count + 1) / 2;
    }
}