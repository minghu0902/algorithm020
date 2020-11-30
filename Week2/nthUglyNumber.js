// https://leetcode-cn.com/problems/chou-shu-lcof/

/**
 * @description 解法一 - 暴力求解，leetcode会超时
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let count = 0
  let i = 1
  while(count < n) {
    if (isUglyNumber(i)) {
      count++
    }
    i++
  }
  return --i
};

var isUglyNumber = function (n) {
  if (n <= 0) return false
  while (n % 5 === 0) n /= 5
  while (n % 3 === 0) n /= 3
  while (n % 2 === 0) n /= 2
  return n === 1
}

/**
 * @description 解法二 - 动态规划 O(n)
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let dp = [1]
  let a = 0, b = 0, c = 0

  for (let i = 1; i < n; i++) {
    let n2 = dp[a] * 2
    let n3 = dp[b] * 3
    let n5 = dp[c] * 5
    let n = Math.min(n2, n3, n5)
    if (n === n2) a++
    if (n === n3) b++
    if (n === n5) c++
    dp[i] = n
  }
  
  return dp[dp.length - 1]
};