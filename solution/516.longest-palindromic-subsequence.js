/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (61.87%)
 * Likes:    467
 * Dislikes: 0
 * Total Accepted:    53.5K
 * Total Submissions: 86.3K
 * Testcase Example:  '"bbbab"'
 *
 * 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。
 *
 *
 *
 * 示例 1:
 * 输入:
 *
 * "bbbab"
 *
 *
 * 输出:
 *
 * 4
 *
 *
 * 一个可能的最长回文子序列为 "bbbb"。
 *
 * 示例 2:
 * 输入:
 *
 * "cbbd"
 *
 *
 * 输出:
 *
 * 2
 *
 *
 * 一个可能的最长回文子序列为 "bb"。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 只包含小写英文字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length
  if (len <= 1) {
    return len
  }
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len)
    dp[i].fill(0, 0, len)
    dp[i][i] = 1
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j <= len - 1; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][len - 1]
}
// @lc code=end
