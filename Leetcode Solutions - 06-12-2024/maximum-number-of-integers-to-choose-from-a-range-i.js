/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const bannedSet = new Set(banned);
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) continue;
        if (sum + i <= maxSum) {
            sum += i;
            count++;
        } else {
            break;
        }
    }
    
    return count;
};