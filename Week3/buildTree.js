/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  let helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null
    let rootVal = preorder[p_start]
    let root = new TreeNode(rootVal)
    let mid = map.get(rootVal)
    let leftNum = mid - i_start
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1)
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end)
    return root
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1)
};