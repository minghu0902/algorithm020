/**
 * @description 解法一 - 排序 + map O(nlogn)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  let res = []

  for (let str of strs) {
    const sortedStr = str.split('').sort().toString()
    if (map.has(sortedStr)) {
      res[map.get(sortedStr)].push(str)
    } else {
      map.set(sortedStr, res.length)
      res.push([str])
    }
  }

  return res
};