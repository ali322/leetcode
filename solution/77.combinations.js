/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.88%)
 * Likes:    626
 * Dislikes: 0
 * Total Accepted:    184.4K
 * Total Submissions: 239.6K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 你可以按任何顺序返回答案。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 * 示例 2:
 *
 *
 * 输入: n = 1, k = 1
 * 输出: [[1]]
 *
 *
 *
 * 提示:
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = []
  if (n <= 0 || k <= 0) return ret
  const backtrace = (track, start) => {
    if (track.length === k) {
      ret.push(track.slice(0))
      return
    }
    for (let i = start; i <= n; i++) {
      track.push(i)
      backtrace(track, i + 1)
      track.pop()
    }
  }
  backtrace([], 1)
  return ret
}
// @lc code=end
