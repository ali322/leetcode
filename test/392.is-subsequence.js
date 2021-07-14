const solution = require('../solution/392.is-subsequence')
const test = require('ava')

test('#392', t => {
  t.is(solution('acb', 'ahbgdc'), false)
})