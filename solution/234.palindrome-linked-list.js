/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (48.46%)
 * Likes:    1047
 * Dislikes: 0
 * Total Accepted:    272K
 * Total Submissions: 560.1K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const mid = (head) => {
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null && slow !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
  const reverse = (head) => {
    let prev = null
    let curr = head
    while (curr != null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }
  if(head == null || head.next == null){
    return true;
  }
  let left = head
  let midNode = mid(head)
  let right = reverse(midNode)
  while (right !== null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
// @lc code=end
