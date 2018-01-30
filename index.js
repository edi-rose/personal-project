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
turnOneCross()
turnTwoCross()


function turnOneCross() {
  if(topLeft.isAvailable()) {
    topLeft.claimSquare('cross')
  }
}

function turnOneNaught() {
   if(midMid.isAvailable()){
     midMid.claimSquare('naught')
   }
}

function turnTwoCross() {
  if(topMid.isAvailable() && topRight.isAvailable()){
    topRight.claimSquare('cross')
  }
}
function turnTwoNaught() {
  var moveCount = 0

}

function resetBoard()  {
  for(var i = 0; i < board.length; i++) {
    board[i].teamName = 'none'
  }
}
module.exports = board
