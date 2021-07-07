const test = require('ava')
const solution = require('../solution/435.non-overlapping-intervals')

test('solution #435 should work', (t) => {
  const result = solution([
    [1, 3],
    [2, 4],
    [3, 6]
  ])
  t.is(result, 2)
})
