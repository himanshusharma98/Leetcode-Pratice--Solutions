function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    for (const it of guards) {
        grid[it[0]][it[1]] = 1;
    }
    for (const it of walls) {
        grid[it[0]][it[1]] = 2;
    }
    for (const it of guards) {
        const r = it[0], c = it[1];
        for (let i = r - 1; i >= 0 && grid[i][c] !== 1 && grid[i][c] !== 2; i--) {
            if (grid[i][c] === 0) grid[i][c] = 3;
        }
        for (let i = r + 1; i < m && grid[i][c] !== 1 && grid[i][c] !== 2; i++) {
            if (grid[i][c] === 0) grid[i][c] = 3;
        }
        for (let j = c - 1; j >= 0 && grid[r][j] !== 1 && grid[r][j] !== 2; j--) {
            if (grid[r][j] === 0) grid[r][j] = 3;
        }
        for (let j = c + 1; j < n && grid[r][j] !== 1 && grid[r][j] !== 2; j++) {
            if (grid[r][j] === 0) grid[r][j] = 3;
        }
    }
    let unguarded = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                unguarded++;
            }
        }
    }
    return unguarded;
};
