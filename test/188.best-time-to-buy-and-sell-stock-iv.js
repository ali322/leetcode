const solution = require('../solution/188.best-time-to-buy-and-sell-stock-iv')
const test = require('ava')

test('#121', t => {
  let result = solution(1, [2,4,1])
  // console.log(result)
  t.is(result, 2)
})