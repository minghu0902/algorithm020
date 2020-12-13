// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
  // dfs暴力求解
  // 时间复杂度 O(2^n) 空间复杂度 O(1)
  if (prices.length < 2) return 0

  let res = 0
  let len = prices.length
  
  /**
   * i: 表示第 i 天
   * state: 0 当天不持有股票 1 表示当天持有一股
   * profit: 当天最大利润
   */
  let dfs = (i, state, profit) => {
    if (i === prices.length) {
      res = Math.max(res, profit)
      return
    }
    // 保持不动
    dfs(i + 1, state, profit)
    // 买入或卖出
    state === 0 ? 
      dfs(i + 1, 1, profit - prices[i]) :
      dfs(i + 1, 0, profit + prices[i])
  }
  dfs(0, 0, 0)

  return res
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  // 由于当前题目不限制买卖次数，所以可以直接使用贪心算法
  // 只要后一天的价格比前一天高，则在前一天买入，后一天卖出
  // 时间复杂度 O(n)，空间复杂度 O(1)
  if (prices.length <= 1) return 0
  let res = 0

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1]
    if (diff > 0) res += diff
  }

  return res
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit3 = function(prices) {
  // 动态规划
  // i 表示第i天； 0 表示当天不持有股票； 1 表示当天持有一股
  // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
  // dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
  // 时间复杂度 O(n)，空间复杂度 O(n)
  if (prices.length < 2) return 0
  
  let dp = []
  dp[0] = [0, -prices[0]]

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [0, 0]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return Math.max.apply(this, dp[dp.length - 1])
};