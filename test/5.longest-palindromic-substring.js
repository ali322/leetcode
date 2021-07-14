const solution = require('../solution/5.longest-palindromic-substring')
const test = require('ava')

test('#5', t => {
  t.is(solution('babd'), 'bab')
})
