/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (46.03%)
 * Likes:    997
 * Dislikes: 0
 * Total Accepted:    257.4K
 * Total Submissions: 558.6K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * intervals[i].length == 2
 * 0 i i
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 1) {
    return []
  }
  // asc
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let res = []
  res.push(intervals[0].concat())
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    let last = res[res.length - 1]
    if (last[1] >= curr[0]) {
      last[1] = Math.max(last[1], curr[1])
    } else {
      res.push(curr.concat())
    }
  }
  return res
}
// @lc code=end
