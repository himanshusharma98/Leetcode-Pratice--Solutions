/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumStrongPairXor = (nums) => {
    const len = nums.length;
    let max = 0;
  
    for (let i = 0; i < len; i += 1) {
      for (let j = i + 1; j < len; j += 1) {
        if (Math.abs(nums[i] - nums[j]) > Math.min(nums[i], nums[j])) continue;
  
        max = Math.max(max, nums[i] ^ nums[j]);
      }
    }
  
    return max;
  };