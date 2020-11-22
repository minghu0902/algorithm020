// https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 解法一 迭代
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function(l1, l2) {
  let res = new ListNode()
  let prev = res

  while(l1 && l2) {
    if (l1.val > l2.val) {
      prev.next = new ListNode(l2.val)
      l2 = l2.next
    } else {
      prev.next = new ListNode(l1.val)
      l1 = l1.next
    }
    prev = prev.next
  }

  if (l1) prev.next = l1

  if (l2) prev.next = l2

  return res.next
};


/**
 * @description 解法二 递归
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists2 = function(l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  } else {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
};