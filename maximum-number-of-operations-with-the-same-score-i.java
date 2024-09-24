class Solution {
    public int maxOperations(int[] nums) {

        int operations = 0;

        int score = nums[0] + nums[1];

        int i = 0;

        while (i < nums.length - 1) {
            if (nums[i] + nums[i + 1] == score) {
                operations++;
                i += 2;
            } else {
                break;
            }

        }

        return operations;

    }
}