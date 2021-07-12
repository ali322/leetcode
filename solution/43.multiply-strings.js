/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.79%)
 * Likes:    668
 * Dislikes: 0
 * Total Accepted:    151.1K
 * Total Submissions: 337.2K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let m = num1.length
  let n = num2.length
  let res = new Array(m + n).fill(0)
  for (let i = m - 1; i >= 0; i--) {
    const n1 = +num1[i]
    for (let j = n - 1; j >= 0; j--) {
      const n2 = +num2[j]
      const multi = n1 * n2
      const sum = res[i + j + 1] + multi
      res[i + j + 1] = sum % 10
      res[i + j] += (sum / 10) | 0
    }
  }
  while (res[0] === 0) {
    res.shift()
  }
  return res.length > 0 ? res.join('') : '0'
}
// @lc code=end
