/**
 * @param {number[]} nums
 * @return {number}
 */
function minSwaps(nums) {
    const n = nums.length;
    let ones = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) ones++;
    }
    let minSwaps = Infinity;
    let left = 0;
    let right = 0;
    let windowOnes = 0;

    while (right < n) {
        if (nums[right] === 1) windowOnes++;
        if (right - left + 1 > ones) {
            if (nums[left] === 1) windowOnes--;
            left++;
        }
        if (right - left + 1 === ones) {
            minSwaps = Math.min(minSwaps, ones - windowOnes);
        }
        right++;
    }
    left = n - ones;
    right = n - 1;
    windowOnes = 0;

    while (right >= 0) {
        if (nums[right] === 1) windowOnes++;
        if (right - left + 1 > ones) {
            if (nums[left] === 1) windowOnes--;
            left++;
        }
        if (right - left + 1 === ones) {
            minSwaps = Math.min(minSwaps, ones - windowOnes);
        }
        right--;
    }
    return minSwaps === Infinity ? 0 : minSwaps;
}
