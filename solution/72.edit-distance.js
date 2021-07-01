/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (60.91%)
 * Likes:    1670
 * Dislikes: 0
 * Total Accepted:    145K
 * Total Submissions: 238K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2：
 *
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * word1 和 word2 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length
  let n = word2.length
  let dp = new Array(m + 1)
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        )
      }
    }
  }
  return dp[m][n]
}
// var minDistance = function (word1, word2) {
//   const dp = (i, j) => {
//     console.log('i ==>', i)
//     console.log('j ==>', j)
//     if (i === -1) {
//       return j + 1
//     }
//     if (j === -1) {
//       return i + 1
//     }
//     if (word1[i] == word2[j]) {
//       return dp(i - 1, j - 1)
//     } else {
//       return Math.min(dp(i, j - 1) + 1, dp(i - 1, j) + 1, dp(i - 1, j - 1) + 1)
//     }
//   }
//   return dp(word1.length - 1, word2.length - 1)
// }
// @lc code=end
module.exports = minDistance
