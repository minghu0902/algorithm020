/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 解法一 - dfs
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function(root) {
  let res = []
  const inorder = (node) => {
    if (node) {
      inorder(node.left)
      res.push(node.val)
      inorder(node.right)
    }
  }
  inorder(root)
  return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 解法二 - 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function(root) {
  let res = []
  let stack = []
  let node = root

  while(stack.length || node) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    res.push(node.val)
    node = node.right
  }

  return res
};