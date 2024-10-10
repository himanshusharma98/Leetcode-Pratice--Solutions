function minDeletionSize(strs: string[]): number {
    const numRows = strs.length;
    const numCols = strs[0].length;
    const dp: number[] = new Array(numCols).fill(1);
    let minDeletions = numCols;

    for (let i = 0; i < numCols; ++i) {
        for (let j = 0; j < i; ++j) {
            let valid = true;
            for (let k = 0; k < numRows; ++k) {
                if (strs[k][j] > strs[k][i]) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        minDeletions = Math.min(minDeletions, numCols - dp[i]);
    }
    return minDeletions;

};