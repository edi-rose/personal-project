var winCheck = require('./functions/winCheck.js')

class Squares {
  constructor(teamName, row, col) {
    this.teamName = teamName,
    this.row = row,
    this.col = col
  }
  // class functions
  isAvailable(){
    if(this.teamName = 'none'){
      return true
    }
    else {
      return false
    }
  }

  claimSquare(team){
     this.teamName = team

  }
}
//board

let topLeft = new Squares('none', 0, 0)
let topMid = new Squares('none', 0, 1)
let topRight = new Squares('none', 0, 2)
let midLeft = new Squares('none', 1, 0)
let midMid = new Squares('none', 1, 1)
let midRight = new Squares('none', 1, 2)
let botLeft = new Squares('none', 2, 0)
let botMid = new Squares('none', 2, 1)
let botRight = new Squares('none', 2, 2)

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botLeft]
//function runners
//board.topMid.claimSquare(board.topMid, 'cross')

topMid.claimSquare('cross')
console.log(topMid)
// function Win(){
// if(winCheck.checkForWin('cross')){
//   console.log('Crosses Win!')
// }
// else if(winCheck.checkForWin('naught')){
//   console.log('Naughts Win!')
// }
// }
//
function turnOneCross() {
  if(topLeft.isAvailable()) {
    topLeft.claimSquare('cross')
  }
}

 function turnOneNaught() {
   if(midMid.isAvailable()){
     midMid.claim('naught')
   }
 }

function turnTwoCross() {
  var square1 = findSquare('top-mid', board)
  var square2 = findSquare('top-right', board)
  var square3 = findSquare('bot-left', board)
  var team = 'cross'

  if(helpers.isAvailable(square1) && helpers.isAvailable(square2)){
    helpers.claim(square2, team)
  }
  else (
    helpers.claim(square3, team)
  )
}

// function turnTwoNaught() {
// }
//
// function printGame(board){
//   for(var i = 0; i < board.cells.length; i++) {
//     console.log(board.cells[i].name + ': ' + board.cells[i].teamName)
// }
// }
