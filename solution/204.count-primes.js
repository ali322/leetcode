/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (38.07%)
 * Likes:    717
 * Dislikes: 0
 * Total Accepted:    155.1K
 * Total Submissions: 407.5K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 * 示例 2：
 *
 * 输入：n = 0
 * 输出：0
 *
 *
 * 示例 3：
 *
 * 输入：n = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 5 * 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const arr = new Array(n).fill(true)
  for (let i = 2; i * i < n; i++) {
    if(arr[i]) {
      for (let j = i * i; j < n; j += i) {
        arr[j] = false
      }
    }
  }
  let ret = 0
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      ret++
    }
  }
  return ret
}
// @lc code=end
