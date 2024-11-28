/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const gameOfLife = function(board) {
    const countLiveNeighbors = (row, col) => {
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
        let count = 0;
        for (const [dr, dc] of directions) {
            const r = row + dr;
            const c = col + dc;
            if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && Math.abs(board[r][c]) === 1) {
                count++;
            }
        }

        return count;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const neighbors = countLiveNeighbors(i, j);
            if (board[i][j] === 1) {
                if (neighbors < 2 || neighbors > 3) {
                    board[i][j] = -1;
                }
            } else {
                if (neighbors === 3) {
                    board[i][j] = 2;
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 0;
            } else if (board[i][j] === 2) {
                board[i][j] = 1;
            }
        }
    }
};