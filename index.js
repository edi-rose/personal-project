var checkForWin = require('./functions/winCheck.js')
var defend = require('./functions/defense.js')
var board = require('./board.js')
var attack = require('./functions/attack.js')

function turnOneCross() {
  //board[0] == topLeft
  if(board[0].isAvailable()) {
    board[0].claimSquare('cross')
    return
  }
}

function turnOneNaught() {
  //board[4] == midMid
  //board[7] == botLeft
   if(board[4].isAvailable()){
     board[4].claimSquare('naught')
     return
   }
   else {
     board[7].claimSquare('naught')
   }
}

function turnTwoCross() {
  //board[1] == topMid
  //board[2] == topRight
  //board[6] == botLeft
  if(board[1].isAvailable() && board[2].isAvailable()){
    board[2].claimSquare('cross')
  }
  else {
    board[6].claimSquare('cross')
  }
}

function turnTwoNaught() {
  if (defend('naught')){
    return
  }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].isAvailable()) {
        board[i].claimSquare('naught')
        return
      }
    }
  }
}

function turnThreeCross(){
  // board[6] == botLeft
  // board[8] == botRight
  if(attack('cross')){
    if(checkForWin('cross')){
      console.log('crosses win!!')
    }
    return
  }
  else if(defend('cross')){
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
        return
      }
    }
  }
  if(checkForWin('cross')){
    console.log('crosses win!!')
  }
}

function turnThreeNaught(){
  if(attack('naught')){
    if(checkForWin('naught')){
      console.log('naught win!!')
    }
    return
  }
  else if(defend('naught')){
    return
  }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].isAvailable()){
        board[i].claimSquare('naught')
        return
      }
    }
  }
  if(checkForWin('naught')){
    console.log('naught win!!')
  }
}

function turnFourCross(){
    if(attack('cross')){
      if(checkForWin('cross')){
        console.log('crosses win!!')
      }
      return
    }
    else if(defend('cross')){
      return
    }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].isAvailable()){
          board[i].claimSquare('cross')
          return
        }
      }
    }
    if(checkForWin('cross')){
      console.log('crosses win!!')
    }
  }

function turnFourNaught(){
    // board[6] == botLeft
    // board[8] == botRight
    if(attack('naught')){
      if(checkForWin('naught')){
        console.log('naughts win!!')
      }
      return
    }
    else if(defend('naught')){
      return
    }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].isAvailable()){
          board[i].claimSquare('naught')
          return
        }
      }
    }
    if(checkForWin('naught')){
      console.log('naughts win!!')
    }
}

function turnFiveCross() {
    if(attack('cross')){
      if(checkForWin('cross')){
        console.log('crosses win!!')
      }
      return
    }
    else if(attack('naught')){
      return
      }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].isAvailable()){
          board[i].claimSquare('cross')
          return
        }
      }
    }
    if(checkForWin('cross')){
      console.log('crosses win!!')
    }
}

function resetBoard()  {
  for(var i = 0; i < board.length; i++) {
    board[i].teamName = 'none'
  }
}

if(checkForWin('cross')){
  console.log('crosses win!!')
}
//function runners
 turnOneCross()
 turnOneNaught()
 turnTwoCross()
 turnTwoNaught()
 turnThreeCross()
 turnThreeNaught()
 turnFourCross()
 turnFourNaught()
 turnFiveCross()

console.log(board)

module.exports = board
