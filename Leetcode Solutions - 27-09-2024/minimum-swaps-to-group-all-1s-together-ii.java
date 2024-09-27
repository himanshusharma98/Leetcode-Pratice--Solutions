import java.util.*;
class Solution {
    public int minSwaps(int[] nums) {
        int n = nums.length;

        int windowSize = Arrays.stream(nums).sum();

        int slide1s = 0;
        for(int i = 0; i < windowSize; i++){
            slide1s += nums[i];
        }
        int max1s = slide1s;
        for (int i = 0; i < n; i++) {
            if (nums[(windowSize + i) % n] == 1) {
                slide1s++; // Adding new one
            }

            if (nums[i] == 1) {
                slide1s--; // Removing old one
            }

            max1s = Math.max(max1s, slide1s);
        }

        return windowSize - max1s; // Minimum swaps

        
    }
}