function countSquares(matrix: number[][]): number {
    const n: number = matrix.length;
    const m: number = matrix[0].length;


    const dp: number[][] = Array(n).fill(0).map(() => Array(m).fill(0));

    let ans: number = 0;


    for (let i = 0; i < n; i++) {
        dp[i][0] = matrix[i][0];
        ans += dp[i][0];
    }


    for (let j = 1; j < m; j++) {
        dp[0][j] = matrix[0][j];
        ans += dp[0][j];
    }


    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(
                    dp[i][j - 1],
                    dp[i - 1][j],
                    dp[i - 1][j - 1]
                );
            }
            ans += dp[i][j];
        }
    }

    return ans;
}
