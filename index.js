var helpers = require('./functions/helpers.js')
var winCheck = require('./functions/winCheck.js')

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

class Squares {
  constructor(teamName, row, col) {
    this.teamName = teamName,
    this.row = row,
    this.col
  }
  // class functions
  findSquare(name){
    for (var i = 0; i < Squares.length; i++) {
      if(Squares[i] == name){
        return Squares[i]
      }
    }
  }
  isAvailable(square){
    if(square.teamName = 'none'){
      return true
    }
    else {
      return false
    }
  }
  claimSquare(square, team){
    square.teamName = team
  }

}

let top-left = new Squares('none', 0, 0)
let top-mid = new Squares('none', 0, 1)
let top-right = new Squares('none', 0, 2)
let mid-left = new Squares('none', 1, 0)
let mid-mid = new Squares('none', 1, 1)
let mid-left = new Squares('none', 1, 2)
let bot-left = new Squares('none', 2, 0)
let bot-mid = new Squares('none', 2, 1)
let bot-right = new Squares('none', 2, 2)

turnOneCross()
turnOneNaught()
turnTwoCross()
printGame(board)
Win()

function Win(){
if(winCheck.checkForWin('cross')){
  console.log('Crosses Win!')
}
else if(winCheck.checkForWin('naught')){
  console.log('Nsughts Win!')
}
}

function turnOneCross() {
  var square = helpers.findSquare('top-left', board)
  var team = 'cross'
  if(helpers.isAvailable(square)) {
    helpers.claim(square, team)
  }
}


 function turnOneNaught() {
   var square = helpers.findSquare('mid-mid', board)
   var team = 'naught'
   if(helpers.isAvailable(square)){
     helpers.claim(square, team)
   }
 }

function turnTwoCross() {
  var square1 = helpers.findSquare('top-mid', board)
  var square2 = helpers.findSquare('top-right', board)
  var square3 = helpers.findSquare('bot-left', board)
  var team = 'cross'

  if(helpers.isAvailable(square1) && helpers.isAvailable(square2)){
    helpers.claim(square2, team)
  }
  else (
    helpers.claim(square3, team)
  )
}

function turnTwoNaught() {
}

function printGame(board){
  for(var i = 0; i < board.cells.length; i++) {
    console.log(board.cells[i].name + ': ' + board.cells[i].teamName)
}
}

module.exports = board
