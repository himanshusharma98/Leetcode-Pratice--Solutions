/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    let ans = new Array(n)
    for (let i = 0, a = 1, z = k + 1; i <= k; i++)
        ans[i] = i % 2 ? z-- : a++
    for (let i = k + 1; i < n;)
        ans[i] = ++i
    return ans

};