var winCheck = require('./functions/winCheck.js')
var defense = require('./functions/defense.js')
var board = require('./board.js')

function turnOneCross() {
  if(board.topLeft.isAvailable()) {
    board.topLeft.claimSquare('cross')
  }
}

function turnOneNaught() {
   if(board.midMid.isAvailable()){
     board.midMid.claimSquare('naught')
   }
   else {
     board.botLeft.claimSquare('naught')
   }
}

function turnTwoCross() {
  if(board.topMid.isAvailable() && board.topRight.isAvailable()){
    board.topRight.claimSquare('cross')
  }
}
function turnTwoNaught() {
  if (defense.Defend('naught')){
    return
  }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].teamName == 'none') {
        board[i].teamName == 'naught'
        return
      }
    }
  }
}

function resetBoard()  {
  for(var i = 0; i < board.length; i++) {
    board[i].teamName = 'none'
  }
}

//function runners
turnOneCross()
turnOneNaught()
turnTwoCross()
turnTwoNaught()
console.log(board)

module.exports = board
