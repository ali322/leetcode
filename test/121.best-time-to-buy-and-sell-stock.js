const solution = require('../solution/121.best-time-to-buy-and-sell-stock')
const test = require('ava')

test('#121', t => {
  let result = solution([7,1,5,3,6,4])
  t.is(result, 5)
})