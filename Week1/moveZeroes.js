// https://leetcode-cn.com/problems/move-zeroes/

/**
 * @description 解法一 快慢指针
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
  var slow = 0

  // 第一次遍历 将非0元素移动到slow指针的前面
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slow++] = nums[i]
    }
  }

  // 第二次遍历 将slow指针的元素及其后面的元素都置为0
  while (slow < nums.length) {
    nums[slow] = 0
    slow++
  }
};


/**
 * @description 解法二
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
  // 记录下一个非0元素要放的位置
  var j = 0

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (i !== j) {
        nums[i] = 0
      }
      j++
    }
  }
};