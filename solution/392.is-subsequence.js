/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 *
 * https://leetcode-cn.com/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (51.22%)
 * Likes:    471
 * Dislikes: 0
 * Total Accepted:    131.3K
 * Total Submissions: 256.3K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 *
 *
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * 进阶：
 *
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 *
 * 致谢：
 *
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * 0
 * 两个字符串都只由小写字符组成。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let m = s.length
  let n = t.length
  let index = new Array(256)
  const binarySearch = (arr, tar) => {
    let lo = 0
    let hi = arr.length
    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2)
      if (arr[mid] > tar) {
        hi = mid
      } else {
        lo = mid + 1
      }
    }
    return lo
  }
  for (let i = 0; i < n; i++) {
    let c = t[i]
    if (index[c] === undefined) {
      index[c] = []
    }
    index[c].push(i)
  }
  let j = 0
  for (let i = 0; i < m; i++) {
    const c = s[i]
    if (index[c] === undefined) return false
    let pos = binarySearch(index[c], j)
    if (pos === index[c].length) return false
    j = index[c][pos] + 1
  }
  return true
}
// @lc code=end
module.exports = isSubsequence
