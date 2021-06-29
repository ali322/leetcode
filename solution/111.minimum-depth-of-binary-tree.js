/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (48.01%)
 * Likes:    532
 * Dislikes: 0
 * Total Accepted:    233.3K
 * Total Submissions: 485.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明：叶子节点是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数的范围在 [0, 10^5] 内
 * -1000 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null) return 0
  let q = new Array()
  let visited = new Set()
  q.push(root)
  visited.add(root)
  let depth = 1
  while(q.length !== 0) {
    let size = q.length
    for (let i = 0; i < size; i++) {
      const curr = q.shift()
      if(curr.left === null && curr.right === null) {
        return depth
      }
      if(curr.left !== null && visited.has(curr.left) === false) {
        q.push(curr.left)
        visited.add(curr.left)
      }
      if(curr.right !== null && visited.has(curr.right) === false) {
        q.push(curr.right)
        visited.add(curr.right)
      }
    }
    depth++
  }
  return depth
};
// @lc code=end
