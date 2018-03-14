var smartMove = require('../Bots/functions/smartMove')

var topLeft = {teamName:'cross', row:0, col:0, D1: true}
var topMid = {teamName:'none', row:0, col:1}
var topRight = {teamName:'none', row:0, col:2, D2: true}
var midLeft = {teamName:'none', row:1, col:0}
var midMid = {teamName:'naught', row:1, col:1, D1: true, D2: true}
var midRight = {teamName:'none', row:1, col:2}
var botLeft = {teamName:'none', row:2, col:0, D2: true}
var botMid = {teamName:'cross', row:2, col:1}
var botRight = {teamName:'none', row:2, col:2, D1: true}

var mockBoard = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

test('smartMove finds the possible pin and stops it', ()=> {
  expect(smartMove('naught', mockBoard)).toEqual(mockBoard[6])
})
