/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numToIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (numToIndexMap.hasOwnProperty(diff)) {
            return [i, numToIndexMap[diff]];
        }

        numToIndexMap[nums[i]] = i;
    }

    return null;

};