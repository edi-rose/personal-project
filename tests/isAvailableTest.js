const isAvailable = require('../functions.js').isAvailable

test('can check if a cell is available for capture', () => {
  const expected = true

  const actual = isAvailable('mid-left')
  expect(actual).toEqual(expected)
})
