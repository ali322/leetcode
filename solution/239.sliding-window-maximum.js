/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.55%)
 * Likes:    1078
 * Dislikes: 0
 * Total Accepted:    168.9K
 * Total Submissions: 340.7K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回滑动窗口中的最大值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,-1], k = 1
 * 输出：[1,-1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums = [9,11], k = 2
 * 输出：[11]
 *
 *
 * 示例 5：
 *
 *
 * 输入：nums = [4,-2], k = 2
 * 输出：[4]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^4
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MonotonicQueue {
  data = []
  // 队尾插入
  push(n) {
    while (this.data.length > 0 && this.data[this.data.length - 1] < n) {
      this.data.pop()
    }
    this.data.push(n)
  }
  max() {
    return this.data[0]
  }
  // 删除队首
  pop(n) {
    if (this.data.length > 0 && this.data[0] === n) {
      this.data.shift()
    }
  }
}
var maxSlidingWindow = function (nums, k) {
  let win = new MonotonicQueue()
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      win.push(nums[i])
    } else {
      win.push(nums[i])
      res.push(win.max())
      win.pop(nums[i - k + 1])
    }
  }
  return res
}
// @lc code=end
