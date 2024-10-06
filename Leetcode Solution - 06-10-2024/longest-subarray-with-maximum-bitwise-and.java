class Solution {
    public int longestSubarray(int[] nums) {
        int max = 0;
        int mi = 0;
        int length = 0;
        int maxLength = 0;
        for (int i = 0; i < nums.length; i++) {
            if (max < nums[i]) {
                max = nums[i];
                mi = i;
            }
        }
        for (int i = mi; i < nums.length; i++) {
            if (nums[i] == max) {
                length += 1;
            }
            else {
                maxLength = Math.max(maxLength, length);
                length = 0;
            }
        }
        maxLength = Math.max(maxLength, length);
        if (maxLength == 0) {
            return 1;
        }
        return maxLength;
    }
}