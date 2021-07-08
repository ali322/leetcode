const test = require('ava')
const solution = require('../solution/887.super-egg-drop')

test('#887', t => {
  const result = solution(2, 6)
  t.is(result, 3)
})