var helpers = require('./functions/helpers.js')
var defense = require('./functions/winCheck.js')
module.exports = board
var board = {}

board.cells = [
  {name:'top-left', teamName: 'none', row: 0, col:0},
  {name:'top-mid', teamName: 'none', row: 0, col: 1},
  {name:'top-right', teamName: 'none', row:0, col:2},
  {name:'mid-left', teamName: 'none', row:1, col:0},
  {name:'mid-mid', teamName: 'none', row:1, col:1},
  {name:'mid-right', teamName: 'none', row:1, col:2},
  {name:'bot-left', teamName: 'none', row:2, col:0},
  {name:'bot-mid', teamName: 'none', row:2, col:1},
  {name:'bot-right', teamName: 'none', row:2, col:2}
];

turnOneCross()
turnOneNaught()
turnTwoCross()
printGame()


function turnOneCross() {
  var square = helpers.findSquare('top-left')
  var team = 'cross'
  if(helpers.isAvailable(square)) {
    helpers.claim(square, team)
  }
}


 function turnOneNaught() {
   var square = helpers.findSquare('mid-mid')
   var team = 'naught'
   if(helpers.isAvailable(square)){
     helpers.claim(square, team)
   }
 }

function turnTwoCross() {
  var square1 = helpers.findSquare('top-mid')
  var square2 = helpers.findSquare('top-right')
  var square3 = helpers.findSquare('bot-left')
  var team = 'cross'

  if(helpers.isAvailable(square1) && helpers.isAvailable(square2)){
    helpers.claim(square2, team)
  }
  else (
    helpers.claim(sqaure3, team)
  )
}

function turnTwoNaught() {

}
