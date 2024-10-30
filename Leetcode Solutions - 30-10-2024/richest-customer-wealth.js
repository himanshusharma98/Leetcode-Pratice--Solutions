/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach((ele) => {
        let sum = ele.reduce(function (x, y) {
            return x + y;
        }, 0);
        if (max < sum) max = sum;
    })
    return max;
};