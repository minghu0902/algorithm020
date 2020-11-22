// https://leetcode-cn.com/problems/rotate-array/

/**
 * @description 解法一 暴力求解
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function(nums, k) {
  let temp, prev
  for (let i = 0; i < k; i++) {
    prev = nums[nums.length - 1]
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j]
      nums[j] = prev
      prev = temp
    }
  }
};


/**
 * @description 解法二
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
};
