// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || !nums.length) return -1

  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[left] === target) return left
    if (nums[right] === target) return right
    if (nums[mid] === target) return mid

    // 判断在左边有序还是右边有序
    if (nums[left] < nums[mid]) {
      // 判断是否处于左边
      if (nums[left] < target && nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // 判断是否处于右边
      if (nums[mid] < target && nums[right] > target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
};