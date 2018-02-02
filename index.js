var winCheck = require('./functions/winCheck.js')
var defense = require('./functions/defense.js')
var board = require('./board.js')

function turnOneCross() {
  //board[0] == topLeft
  if(board[0].isAvailable()) {
    board[0].claimSquare('cross')
  }
}

function turnOneNaught() {
  //board[4] == midMid
  //board[7] == botLeft
   if(board[4].isAvailable()){
     board[4].claimSquare('naught')
   }
   else {
     board[7].claimSquare('naught')
   }
}

function turnTwoCross() {
  //board[1] == topMid
  //bord[2] == topRight
  if(board[1].isAvailable() && board[2].isAvailable()){
    board[2].claimSquare('cross')
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

function turnThreeCross(){
  // board[6] == botLeft
  // board[8] == botRight
  if(defense.Defend('cross')){
    return
  }
  else if(board[6].isAvailable()){
      board[6].claimSquare('cross')
      return
    }
  else if(board[8].isAvailable()){
      board[8].claimSquare('cross')
      return
    }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].isAvailable()){
        board[i].claimSquare('cross')
      }
    }
  }
}

function resetBoard()  {
  for(var i = 0; i < board.length; i++) {
    board[i].teamName = 'none'
  }
}
if(winCheck.checkForWin('cross')){
  console.log('crosses win!!')
}
//function runners
//turnOneCross()
//turnOneNaught()
//turnTwoCross()
//turnTwoNaught()
//turnThreeCross()
console.log(board)

module.exports = board
