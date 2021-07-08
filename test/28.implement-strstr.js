const solution = require('../solution/28.implement-strstr')
const test = require('ava')

test('#28', t => {
  const result = solution('mississippi', 'issip')
  t.is(4, result)
})
