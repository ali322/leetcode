const solution = require('../solution/28.implement-strstr')
const test = require('ava')

test('solution #28 should work', t => {
  const result = solution('mississippi', 'issip')
  t.is(4, result)
})
