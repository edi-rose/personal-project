var attack = require('../Bots/functions/attack')
var defense = require('../Bots/functions/defense')

var topLeft = {teamName:'cross', row:0, col:0, D1: true}
var topMid = {teamName:'cross', row:0, col:1}
var topRight = {teamName:'none', row:0, col:2, D2: true}
var midLeft = {teamName:'none', row:1, col:0}
var midMid = {teamName:'cross', row:1, col:1, D1: true, D2: true}
var midRight = {teamName:'none', row:1, col:2}
var botLeft = {teamName:'none', row:2, col:0, D2: true}
var botMid = {teamName:'none', row:2, col:1}
var botRight = {teamName:'none', row:2, col:2, D1: true}

var mockBoard = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

test('test attack if attack rows is working', ()=>{
  expect(attack.attackRows('cross', mockBoard)).toEqual(mockBoard[2])
})

test('test if attack collumns is working', ()=>{
  expect(attack.attackCollumns('cross', mockBoard)).toEqual(mockBoard[7])
})

test('test if defend collumns is working', ()=>{
  expect(defense.defendCollumns('naught', mockBoard)).toEqual(mockBoard[7])
})

test('test if defend rows is working', ()=>{
  expect(defense.defendRows('naught', mockBoard)).toEqual(mockBoard[2])
})
