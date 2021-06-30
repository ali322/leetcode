/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (40.55%)
 * Likes:    886
 * Dislikes: 0
 * Total Accepted:    191.4K
 * Total Submissions: 471.9K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：答案中不可以包含重复的四元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [], target = 0
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  return nSum(nums, 4, 0, target)
}
const nSum = (arr, n, start, target) => {
  arr = arr.sort((a, b) => a - b)
  const size = arr.length
  let ret = new Array()
  if (n < 2 || n > size) {
    return []
  }
  if (n === 2) {
    let lo = start
    let hi = size - 1
    while (lo < hi) {
      const sum = arr[lo] + arr[hi]
      const left = arr[lo]
      const right = arr[hi]
      if (sum < target) {
        while (lo < hi && arr[lo] === left) lo++
      } else if (sum > target) {
        while (lo < hi && arr[hi] === right) hi--
      } else {
        ret.push([left, right])
        while (lo < hi && arr[lo] === left) lo++
        while (lo < hi && arr[hi] === right) hi--
      }
    }
  } else {
    for (let i = start; i < size; i++) {
      const tuples = nSum(arr, n - 1, i + 1, target - arr[i])
      for (const tuple of tuples) {
        tuple.push(arr[i])
        ret.push(tuple)
      }
      while (i < size && arr[i] === arr[i + 1]) i++
    }
  }
  return ret
}
// @lc code=end
