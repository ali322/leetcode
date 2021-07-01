/*
 * @lc app=leetcode.cn id=1884 lang=javascript
 *
 * [1884] 鸡蛋掉落-两枚鸡蛋
 *
 * https://leetcode-cn.com/problems/egg-drop-with-2-eggs-and-n-floors/description/
 *
 * algorithms
 * Medium (70.09%)
 * Likes:    11
 * Dislikes: 0
 * Total Accepted:    689
 * Total Submissions: 983
 * Testcase Example:  '2'
 *
 * 给你 2 枚相同 的鸡蛋，和一栋从第 1 层到第 n 层共有 n 层楼的建筑。
 *
 * 已知存在楼层 f ，满足 0  ，任何从 高于 f 的楼层落下的鸡蛋都 会碎 ，从 f 楼层或比它低 的楼层落下的鸡蛋都 不会碎 。
 *
 * 每次操作，你可以取一枚 没有碎 的鸡蛋并把它从任一楼层 x 扔下（满足 1
 * ）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。
 *
 * 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：2
 * 解释：我们可以将第一枚鸡蛋从 1 楼扔下，然后将第二枚从 2 楼扔下。
 * 如果第一枚鸡蛋碎了，可知 f = 0；
 * 如果第二枚鸡蛋碎了，但第一枚没碎，可知 f = 1；
 * 否则，当两个鸡蛋都没碎时，可知 f = 2。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 100
 * 输出：14
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
  let k = 2
  let dp = new Array(k + 1)
  for (let i = 0; i < k + 1; i++) {
    dp[i] = new Array(n + 1)
    dp[i].fill(0, 0, n + 1)
  }
  let m = 0
  while (dp[k][m] < n) {
    m++
    for (let i = 1; i <= k; i++) {
      dp[i][m] = dp[i - 1][m - 1] + dp[i][m - 1] + 1
    }
  }
  return m
}
// @lc code=end
