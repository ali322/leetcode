/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 *
 * https://leetcode-cn.com/problems/lexicographical-numbers/description/
 *
 * algorithms
 * Medium (73.96%)
 * Likes:    184
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 26.3K
 * Testcase Example:  '13'
 *
 * 给定一个整数 n, 返回从 1 到 n 的字典顺序。
 *
 * 例如，
 *
 * 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
 *
 * 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.sort()
}
// @lc code=end
module.exports = lexicalOrder
