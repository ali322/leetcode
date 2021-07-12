/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (44.72%)
 * Likes:    985
 * Dislikes: 0
 * Total Accepted:    126.1K
 * Total Submissions: 281.6K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 *
 * 示例 1 :
 *
 *
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 *
 *
 * 说明 :
 *
 *
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // let preSum = [0]
  // for (let i = 0; i < nums.length; i++) {
  //   preSum[i + 1] = preSum[i] + nums[i]
  // }
  // // let res = []
  // let res = 0
  // for (let i = 1; i <= nums.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (preSum[i] - preSum[j] === k) {
  //       // res.push([j, i])
  //       res++
  //     }
  //   }
  // }
  // return res
  let n = nums.length
  let preSum = new Map()
  preSum.set(0, 1)
  let sum0_i = 0
  let res = 0
  for (let i = 0; i < n; i++) {
    sum0_i += nums[i]
    let sum0_j = sum0_i - k
    if (preSum.has(sum0_j)) {
      res += preSum.get(sum0_j)
    }
    if (preSum.has(sum0_i)) {
      preSum.set(sum0_i, preSum.get(sum0_i) + 1)
    } else {
      preSum.set(sum0_i, 1)
    }
  }
  return res
}
// @lc code=end
