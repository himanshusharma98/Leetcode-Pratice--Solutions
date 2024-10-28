function applyOperations(nums: number[]): number[] {

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  let filterZero = nums.filter(e => e !== 0)
  return filterZero.concat(new Array(nums.length - filterZero.length).fill(0))
};
