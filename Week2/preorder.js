/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @description 解法一 - 深度优先搜索
 * @param {Node} root
 * @return {number[]}
 */
var preorder1 = function(root) {
  if (!root) return []
  let res = []
  const inorder = (node) => {
    if (node && Array.isArray(node.children)) {
      res.push(node.val)
      node.children.forEach(child => {
        inorder(child)
      })
    }
  }
  inorder(root)
  return res
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @description 解法二 - 迭代
 * @param {Node} root
 * @return {number[]}
 */
var preorder2 = function(root) {
  if (!root) return []
  let res = []
  let stack = [root]

  while(stack.length) {
    const node = stack.pop()
    if (node) {
      res.push(node.val)
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
    }
  }

  return res
};