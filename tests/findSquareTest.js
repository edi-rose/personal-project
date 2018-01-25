const findCell = require('../functions.js').findCell

test('can find a cell by name', () => {
  const expected = {name:'top-right', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false, isRowEnd:true}

  const actual = findCell('top-right')
  expect(actual).toEqual(expected)
})
