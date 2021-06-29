/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 *
 * https://leetcode-cn.com/problems/open-the-lock/description/
 *
 * algorithms
 * Medium (53.33%)
 * Likes:    356
 * Dislikes: 0
 * Total Accepted:    60.6K
 * Total Submissions: 113.6K
 * Testcase Example:  '["0201","0101","0102","1212","2002"]\n"0202"'
 *
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8',
 * '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 
 * 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：
 * 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: deadends = ["8888"], target = "0009"
 * 输出：1
 * 解释：
 * 把最后一位反向旋转一次即可 "0000" -> "0009"。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"],
 * target = "8888"
 * 输出：-1
 * 解释：
 * 无法旋转到目标数字且不被锁定。
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入: deadends = ["0000"], target = "8888"
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * deadends[i].length == 4
 * target.length == 4
 * target 不在 deadends 之中
 * target 和 deadends[i] 仅由若干位数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let visited = new Set()
  let q = new Array()
  q.push('0000')
  visited.add('0000')
  let step = 0
  const plus = (prev, i) => {
    let arr = prev.split('')
    let num = parseInt(arr[i])
    arr[i] = num === 9 ? 0 : num + 1
    return arr.join('')
  }
  const minus = (prev, i) => {
    let arr = prev.split('')
    let num = parseInt(arr[i])
    arr[i] = num === 0 ? 9 : num - 1
    return arr.join('')
  }
  while(q.length !== 0) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const curr = q.shift()
      if(deadends.includes(curr)) {
        continue
      }
      if(curr === target) {
        return step
      }
      for (let j = 0; j < 4; j++) {
        let next = plus(curr, j)
        if(!visited.has(next)) {
          q.push(next)
          visited.add(next)
        }
        next = minus(curr, j)
        if(!visited.has(next)) {
          q.push(next)
          visited.add(next)
        }
      }
    }
    step++
  }
  return -1
};
// @lc code=end
