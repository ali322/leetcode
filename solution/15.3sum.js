/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (32.49%)
 * Likes:    3458
 * Dislikes: 0
 * Total Accepted:    547.3K
 * Total Submissions: 1.7M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = nums.sort((a, b) => a - b)
  let ret = new Array()
  for (let i = 0; i < arr.length; i++) {
    const tuples = twoSum(arr, i + 1, 0 - arr[i])
    for (const tuple of tuples) {
      tuple.push(arr[i])
      ret.push(tuple)
    }
    while (i < arr.length - 1 && arr[i] === arr[i + 1]) i++
  }
  return ret
}

const twoSum = (arr, start, target) => {
  let lo = start
  let hi = arr.length - 1
  let ret = new Array()
  while (lo < hi) {
    const sum = arr[lo] + arr[hi]
    let left = arr[lo]
    let right = arr[hi]
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
  return ret
}
// @lc code=end
