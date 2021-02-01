/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 动态规划
  // dp[i][j] -> 表示 grid[i][j] 位置的最小路径和
  let r = grid.length
  let c = grid[0].length
  let dp = [[grid[0][0]]]

  for (let i = 1; i < r; i++) {
    dp[i] = Array(c).fill(0)
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let i = 1; i < c; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[r - 1][c - 1]
};