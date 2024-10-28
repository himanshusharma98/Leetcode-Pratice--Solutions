function deleteGreatestValue(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        grid[i] = grid[i].sort((a, b) => b - a);
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let max = grid[0][i];
        for (let j = 0; j < m; j++) {
            if (max < grid[j][i]) {
                max = grid[j][i]
            }
        }
        sum += max;
    }
    return sum;

};
