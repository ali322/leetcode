/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (43.68%)
 * Likes:    564
 * Dislikes: 0
 * Total Accepted:    111.5K
 * Total Submissions: 254.8K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
 * 填充。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [["X"]]
 * 输出：[["X"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n == board[i].length
 * 1
 * board[i][j] 为 'X' 或 'O'
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length == 0) return
  let m = board.length
  let n = board[0].length
  let uf = new UF(m * n + 1)
  let dummy = m * n
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      uf.union(i * n, dummy)
    }
    if (board[i][n - 1] === 'O') {
      uf.union(i * n + n - 1, dummy)
    }
  }
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      uf.union(j, dummy)
    }
    if (board[m - 1][j] === 'O') {
      uf.union((m - 1) * n + j, dummy)
    }
  }
  let d = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0]
  ]
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'O') {
        for (let k = 0; k < 4; k++) {
          let x = i + d[k][0]
          let y = j + d[k][1]
          if (board[x][y] === 'O') {
            uf.union(x * n + y, i * n + j)
          }
        }
      }
    }
  }
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!uf.connected(dummy, i * n + j)) {
        board[i][j] = 'X'
      }
    }
  }
}

class UF {
  constructor(n) {
    this.count = n
    this.parent = new Array(n)
    this.size = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }
  union(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    if (rootP === rootQ) return
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    } else {
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    }
    this.count--
  }
  find(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]]
      x = this.parent[x]
    }
    return x
  }
  connected(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    return rootP === rootQ
  }
  getCount() {
    return this.count
  }
}
// @lc code=end
