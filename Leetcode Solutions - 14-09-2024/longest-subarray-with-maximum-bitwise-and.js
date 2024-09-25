/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let maxAnd = 0;
    let maxLength = 0;
    let currentAnd = nums[0];
    let currentLength = 1;

    for (let i = 1; i < nums.length; i++) {
        currentAnd &= nums[i];
        currentLength++;

        if (currentAnd < nums[i]) {
            currentAnd = nums[i];
            currentLength = 1;
        }

        if (currentAnd > maxAnd) {
            maxAnd = currentAnd;
            maxLength = currentLength;
        } else if (currentAnd === maxAnd) {
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};