// https://leetcode-cn.com/problems/valid-anagram/

/**
 * @description 暴力求解 - 先排序在比较 O(nlogn)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function(s, t) {
  if (s.length !== t.length) return false
  return s.split('').sort().toString() === t.split('').sort().toString()
};

/**
 * @description map - O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
  if (s.length !== t.length) return false
  let map = new Map()
  for (const str of s) {
    map.set(str, map.has(str) ? map.get(str) + 1 : 1)
  }
  for (const str of t) {
    if (map.has(str)) {
      map.set(str, map.get(str) - 1)
      if (map.get(str) === 0) {
        map.delete(str)
      }
    }
  }
  return map.size === 0
};