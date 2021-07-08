/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (40.71%)
 * Likes:    955
 * Dislikes: 0
 * Total Accepted:    413.4K
 * Total Submissions: 1M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0
 * 开始）。如果不存在，则返回  -1 。
 *
 *
 *
 * 说明：
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf()
 * 定义相符。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：haystack = "hello", needle = "ll"
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：haystack = "aaaaa", needle = "bba"
 * 输出：-1
 *
 *
 * 示例 3：
 *
 *
 * 输入：haystack = "", needle = ""
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * haystack 和 needle 仅由小写英文字符组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//   let len1 = haystack.length
//   let len2 = needle.length
//   if(len1 < len2) return -1
//   if(len2 === 0) return 0
//   for(let i=0;i<len1;++i) {
//     let j
//     for(j =0;j<len2;j++) {
//       if(haystack[i+j] !== needle[j]) {
//         break
//       }
//     }
//     if(j === len2) {
//       return i
//     }
//   }
//   return -1
// };
const next = (pat) => {
  let len = pat.length
  let arr = new Array(len).fill(0)
  for (let i = 1, j = 0; i < len; i++) {
    while (j > 0 && pat[i] !== pat[j]) j = arr[j - 1]
    if (pat[i] === pat[j]) j++
    arr[i] = j
  }
  return arr
}
const search = (txt, pat) => {
  const arr = next(pat)
  const len1 = txt.length
  const len2 = pat.length
  if (len1 < len2) return -1
  if (len2 === 0) return 0
  for (let i = 0, j = 0; i < len1; i++) {
    while (j > 0 && txt[i] !== pat[j]) {
      j = arr[j - 1]
    }
    if (txt[i] === pat[j]) j++
    if (j === len2) return i - len2 + 1
  }
  return -1
}
var strStr = function (haystack, needle) {
  return search(haystack, needle)
}
// @lc code=end
module.exports = strStr
