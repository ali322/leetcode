const test = require('ava')
const solution = require('../solution/887.super-egg-drop')

test('case 1', t => {
  const result = solution(2, 6)
  t.is(result, 3)
})