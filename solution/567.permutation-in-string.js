/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (42.44%)
 * Likes:    369
 * Dislikes: 0
 * Total Accepted:    89.7K
 * Total Submissions: 211.4K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 *
 * 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 *
 *
 * 示例 2：
 *
 *
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 *
 *
 *
 *
 * 提示：
 *
 *
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 *
 *
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0
  let right = 0
  let need = new Map()
  for (let i = 0; i < s1.length; i++) {
    need.set(s1[i], need.has(s1[i]) ? need.get(s1[i]) + 1 : 1)
  }
  // for(let c of s1) {
  //   need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  // }
  let win = new Map()
  let valid = 0
  while (right < s2.length) {
    const c = s2[right]
    right++
    if (need.has(c)) {
      win.set(c, win.has(c) ? win.get(c) + 1 : 1)
      if (need.get(c) === win.get(c)) {
        valid++
      }
    }
    while (valid === need.size) {
      if (right - left === s1.length) {
        return true
      }
      const d = s2[left]
      left++
      if (need.has(d)) {
        if (need.get(d) === win.get(d)) {
          valid--
        }
        win.set(d, win.get(d) - 1)
      }
    }
  }
  return false
}
// @lc code=end
