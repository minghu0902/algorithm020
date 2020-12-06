// https://leetcode-cn.com/problems/combinations/submissions/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = []
  let dfs = (i, set) => {
    if (set.length === k) {
      res.push([...set])
      return
    }
    for (let j = i; j <= n; j++) {
      set.push(j)
      dfs(j + 1, set)
      set.pop()
    }
  }
  dfs(1, [])
  return res
};