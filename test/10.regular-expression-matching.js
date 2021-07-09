const solution = require('../solution/10.regular-expression-matching')
const test = require('ava')

test('#10', t => {
  t.is(solution('aa', 'a*'), true)
})