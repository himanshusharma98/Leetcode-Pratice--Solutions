/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let fal = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] % 2) === (nums[i + 1] % 2)) {
            fal.push(i);
        }
    }
    let res = Array(queries.length).fill(true);
    if (fal.length === 0) return res;
    for (let i = 0; i < queries.length; i++) {
        let [s, e] = queries[i];
        if (s !== e) {
            let idx = fal.findIndex(x => x >= s);
            if (idx !== -1 && fal[idx] < e) {
                res[i] = false;
            }
        }
    }
    return res;
};