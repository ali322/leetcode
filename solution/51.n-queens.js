/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.77%)
 * Likes:    919
 * Dislikes: 0
 * Total Accepted:    132.5K
 * Total Submissions: 179.6K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 *
 *
 *
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[["Q"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let board = new Array(n)
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(n).fill('.')
  }
  let ret = []
  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (
          board[i][j] === 'Q' &&
          (col === j || i + j === row + col || i - j === row - col)
        ) {
          return false
        }
      }
    }
    return true
  }
  const backtrace = (row) => {
    if (row === n) {
      let strings = board.slice()
      strings = strings.map((v) => v.join(''))
      ret.push(strings)
      return
    }
    for (let i = 0; i < n; i++) {
      if (isValid(row, i) === false) continue
      board[row][i] = 'Q'
      backtrace(row + 1)
      board[row][i] = '.'
    }
  }
  backtrace(0)
  return ret
}
// @lc code=end
