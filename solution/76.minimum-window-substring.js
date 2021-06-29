/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (41.71%)
 * Likes:    1214
 * Dislikes: 0
 * Total Accepted:    149.3K
 * Total Submissions: 357.9K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 *
 * 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 和 t 由英文字母组成
 *
 *
 *
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0
  let right = 0
  let valid = 0
  let need = new Map()
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], need.has(t[i]) ? need.get(t[i]) + 1 : 1)
  }
  let win = new Map()
  let start = 0
  let len = Infinity
  while (right < s.length) {
    const c = s[right]
    right++
    if (need.has(c)) {
      win.set(c, win.has(c) ? win.get(c) + 1 : 1)
      if (need.get(c) === win.get(c)) {
        valid++
      }
    }
    while (valid === need.size) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      const d = s[left]
      left++
      if (need.has(d)) {
        if (need.get(d) === win.get(d)) {
          valid--
        }
        win.set(d, win.get(d) - 1)
      }
    }
  }
  return len === Infinity ? '' : s.substr(start, len)
}
// @lc code=end
