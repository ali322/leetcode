const test = require('ava')
const solution = require('../solution/435.non-overlapping-intervals')

test('#435', (t) => {
  const result = solution([
    [1, 3],
    [2, 4],
    [3, 6]
  ])
  t.is(result, 1)
})
