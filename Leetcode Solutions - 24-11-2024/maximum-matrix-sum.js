var maxMatrixSum = function(matrix) {
    let neg = 0;
    let sum = 0;
    let minVal = Infinity;
    for(let row of matrix) {
        for(let val of row) {
            if(val < 0) {
                neg++;
            }
            sum += Math.abs(val);
            minVal = Math.min(minVal, Math.abs(val));
        }
    }
    if(neg % 2 === 1) {
        sum -= 2 * minVal;
    }
    return sum;
    
};
