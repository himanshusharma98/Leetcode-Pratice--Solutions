var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
    let totalSum = mean * (n + m);
    let observedSum = rolls.reduce((a, b) => a + b, 0);
    
    let missingSum = totalSum - observedSum;
    
    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }
    
    let base = Math.floor(missingSum / n);
    let remainder = missingSum % n;
    
    let result = new Array(n).fill(base);
    for (let i = 0; i < remainder; i++) {
        result[i] += 1;
    }
    
    return result;
};
