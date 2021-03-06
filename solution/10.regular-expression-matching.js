/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (31.42%)
 * Likes:    2221
 * Dislikes: 0
 * Total Accepted:    181.8K
 * Total Submissions: 578.5K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aa" p = "a"
 * 输出：false
 * 解释："a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 *
 * 输入：s = "aa" p = "a*"
 * 输出：true
 * 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "ab" p = ".*"
 * 输出：true
 * 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "aab" p = "c*a*b"
 * 输出：true
 * 解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5：
 *
 *
 * 输入：s = "mississippi" p = "mis*is*p*."
 * 输出：false
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * 0
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 保证每次出现字符 * 时，前面都匹配到有效的字符
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let m = s.length
  let n = p.length
  let memo = {}
  const dp = (i, j) => {
    if (j === n) return i === m
    if (i === m) {
      if ((n - j) % 2 === 1) return false
      for (; j + 1 < n; j += 2) {
        if (p[j + 1] !== '*') {
          return false
        }
      }
      return true
    }
    let key = `${i}-${j}`
    if (memo[key] !== undefined) {
      return memo[key]
    }
    let matched = false
    if (s[i] == p[j] || p[j] === '.') {
      if (j < n - 1 && p[j + 1] === '*') {
        // 0 or more
        matched = dp(i, j + 2) || dp(i + 1, j)
      } else {
        // 1
        matched = dp(i + 1, j + 1)
      }
    } else {
      if (j < n - 1 && p[j + 1] === '*') {
        matched = dp(i, j + 2)
      } else {
        matched = false
      }
    }
    memo[key] = matched
    return matched
  }
  return dp(0, 0)
}
// @lc code=end
module.exports = isMatch
