const solution = require('../solution/20.valid-parentheses')
const test = require('ava')

test('#20', t => {
  t.is(solution('(())'), true)
})