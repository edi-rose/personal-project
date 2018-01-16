var  turnOne= require('../index.js')

test('returns true', () => {
  const expected = true
  const actual = board.cells[0].isCross
  expect(actual).toBe(expected)
})
