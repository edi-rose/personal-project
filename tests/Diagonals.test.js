var attack = require('../Bots/functions/attack')
var defense = require('../Bots/functions/defense')

var topLeft = {teamName:'cross', row:0, col:0, D1: true}
var topMid = {teamName:'none', row:0, col:1}
var topRight = {teamName:'cross', row:0, col:2, D2: true}
var midLeft = {teamName:'none', row:1, col:0}
var midMid = {teamName:'cross', row:1, col:1, D1: true, D2: true}
var midRight = {teamName:'none', row:1, col:2}
var botLeft = {teamName:'none', row:2, col:0, D2: true}
var botMid = {teamName:'none', row:2, col:1}
var botRight = {teamName:'none', row:2, col:2, D1: true}

var mockBoard = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

test('test attack if attack D1 is working', ()=>{
  expect(attack.attackDiagonal1('cross', mockBoard)).toEqual(mockBoard[8])
})

test('test attack if attack D2 is working', ()=>{
  expect(attack.attackDiagonal2('cross', mockBoard)).toEqual(mockBoard[6])
})

test('test attack if defend D! is working', ()=>{
  expect(defense.defendDiagonal1('naught', mockBoard)).toEqual(mockBoard[8])
})

test('test attack if defend D2 is working', ()=>{
  expect(defense.defendDiagonal2('naught', mockBoard)).toEqual(mockBoard[6])
})
