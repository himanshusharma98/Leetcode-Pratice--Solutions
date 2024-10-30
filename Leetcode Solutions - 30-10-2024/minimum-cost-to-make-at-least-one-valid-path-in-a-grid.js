/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const dp = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const queue = [[0, 0]]; r

  dp[0][0] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();


    for (let d = 0; d < 4; d++) {
      const [dx, dy] = directions[d];
      const newX = x + dx;
      const newY = y + dy;


      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {

        const newCost = dp[x][y] + (grid[x][y] === d + 1 ? 0 : 1);


        if (newCost < dp[newX][newY]) {
          dp[newX][newY] = newCost;
          queue.push([newX, newY]);
        }
      }
    }
  }

  return dp[m - 1][n - 1];
}