function maxMoves(grid: number[][]): number {
    const row = grid.length;
    const col = grid[0].length;
    const dp: number[][] = Array.from({ length: row }, () => Array(col).fill(1));

    for (let j = col - 2; j >= 0; j--) {
        for (let i = 0; i < row; i++) {
            const val = grid[i][j];
            let maxMove = val < grid[i][j + 1] ? dp[i][j + 1] : 0;

            if (i < row - 1) {
                maxMove = Math.max(maxMove, val < grid[i + 1][j + 1] ? dp[i + 1][j + 1] : 0);
            }

            if (i > 0) {
                maxMove = Math.max(maxMove, val < grid[i - 1][j + 1] ? dp[i - 1][j + 1] : 0);
            }

            dp[i][j] = 1 + maxMove;
        }
    }

    let ans = 0;
    for (let i = 0; i < row; i++) {
        ans = Math.max(ans, dp[i][0]);
    }

    return ans - 1;
}