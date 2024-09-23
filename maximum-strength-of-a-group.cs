public class Solution {
    public long MaxStrength(int[] nums) {
        int negativeCount = 0; 
        int zeroCount = 0;

        if(nums.Length == 1){
            return nums[0];
        }
        long op = 1;
        int small = Int32.MaxValue;
        for(int i = 0; i< nums.Length; i++){
            if(Math.Abs(nums[i]) <= Math.Abs(small) && nums[i] < 0){
                small = nums[i];
            }
            if(nums[i] != 0){
                op = op * nums[i];
            }
            if(nums[i]<0){
                negativeCount++;
            }
            if(nums[i]== 0){
                zeroCount++;
            }
        }
        if(op< 0){
            op = op /small;
        }
        if((negativeCount == 1 && negativeCount+zeroCount == nums.Length) || zeroCount == nums.Length)
        {
            return 0;
        }
        return op;
        
    }
}