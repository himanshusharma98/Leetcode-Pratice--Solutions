/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort((a, b) => (a - b));
    if (money - (prices[0] + prices[1]) < 0) return money;
    return money - (prices[0] + prices[1]);
};