/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (43.78%)
 * Likes:    1344
 * Dislikes: 0
 * Total Accepted:    250.4K
 * Total Submissions: 572.1K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例 2：
 *
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 * 示例 4：
 *
 *
 * 输入：coins = [1], amount = 1
 * 输出：1
 *
 *
 * 示例 5：
 *
 *
 * 输入：coins = [1], amount = 2
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   let dp = new Array(amount + 1).fill(Infinity)
//   // base case
//   dp[0] = 0
//   for (let i = 0; i < dp.length; i++) {
//     for (const coin of coins) {
//       if (i - coin < 0) continue
//       dp[i] = Math.min(dp[i], dp[i - coin] + 1)
//     }
//   }
//   return dp[amount] === Infinity ? -1 : dp[amount]
// }
var coinChange = function (coins, amount) {
  let memo = {}
  const dp = (n) => {
    if (memo[n] !== undefined) {
      return memo[n]
    }
    // base case
    if (n === 0) return 0
    if (n < 0) return -1
    let ret = Infinity
    for (const coin of coins) {
      let subProblem = dp(n - coin)
      if (subProblem === -1) continue
      ret = Math.min(subProblem + 1, ret)
    }
    memo[n] = ret === Infinity ? -1 : ret
    return memo[n]
  }
  return dp(amount)
}
// @lc code=end
