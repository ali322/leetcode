const test = require('ava')
const minDistance = require('../solution/72.edit-distance')

test('#72', (t) => {
  const result = minDistance('dinitrophenylhydrazine', 'benzalphenylhydrazone')
  t.is(result, 7)
})
