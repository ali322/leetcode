/*
 * @lc app=leetcode.cn id=855 lang=javascript
 *
 * [855] 考场就座
 *
 * https://leetcode-cn.com/problems/exam-room/description/
 *
 * algorithms
 * Medium (41.05%)
 * Likes:    89
 * Dislikes: 0
 * Total Accepted:    3.9K
 * Total Submissions: 9.5K
 * Testcase Example:  '["ExamRoom","seat","seat","seat","seat","leave","seat"]\n' +
  '[[10],[],[],[],[],[4],[]]'
 *
 * 在考场里，一排有 N 个座位，分别编号为 0, 1, 2, ..., N-1 。
 * 
 * 
 * 当学生进入考场后，他必须坐在能够使他与离他最近的人之间的距离达到最大化的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在
 * 0 号座位上。)
 * 
 * 返回 ExamRoom(int N) 类，它有两个公开的函数：其中，函数 ExamRoom.seat() 会返回一个 int
 * （整型数据），代表学生坐的位置；函数 ExamRoom.leave(int p) 代表坐在座位 p 上的学生现在离开了考场。每次调用
 * ExamRoom.leave(p) 时都保证有学生坐在座位 p 上。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：["ExamRoom","seat","seat","seat","seat","leave","seat"],
 * [[10],[],[],[],[],[4],[]]
 * 输出：[null,0,9,4,2,null,5]
 * 解释：
 * ExamRoom(10) -> null
 * seat() -> 0，没有人在考场里，那么学生坐在 0 号座位上。
 * seat() -> 9，学生最后坐在 9 号座位上。
 * seat() -> 4，学生最后坐在 4 号座位上。
 * seat() -> 2，学生最后坐在 2 号座位上。
 * leave(4) -> null
 * seat() -> 5，学生最后坐在 5 号座位上。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 10^9
 * 在所有的测试样例中 ExamRoom.seat() 和 ExamRoom.leave() 最多被调用 10^4 次。
 * 保证在调用 ExamRoom.leave(p) 时有学生正坐在座位 p 上。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 */
var ExamRoom = function (n) {
  this.number = n - 1
  this.arr = []
  this.seatNo = 0
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
  this.seatNo = 0
  if (this.arr.length === 1) {
    if (this.arr[0] === 0) {
      this.seatNo = this.number
    } else if (this.arr[0] === this.number) {
      this.seatNo = 0
    } else {
      let distance1 = this.arr[0]
      let distance2 = this.number - this.arr[0]
      if (distance1 > distance2) {
        this.seatNo = distance1
      } else {
        this.seatNo = distance2 + distance1
      }
    }
  } else if (this.arr.length > 1) {
    let maxDistance = this.arr[0]
    let start
    for (let i = 0; i < this.arr.length - 1; i++) {
      let distance = Math.floor((this.arr[i + 1] - this.arr[i]) >>> 1)
      if (maxDistance < distance) {
        maxDistance = distance
        start = this.arr[i]
        this.seatNo = start + maxDistance
      }
    }
    if (this.number - this.arr[this.arr.length - 1] > maxDistance) {
      this.seatNo = this.number
    }
  }
  this.arr.push(this.seatNo)
  this.arr.sort((a, b) => a - b)
  return this.seatNo
}

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  let index = this.arr.indexOf(p)
  this.arr.splice(index, 1)
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
// @lc code=end
