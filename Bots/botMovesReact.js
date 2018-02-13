
var defend = require('./functions/defense.js')
var board = require('../client/boardArray')
var attack = require('./functions/attack.js')

function turnOneCross() {
  //board[0] == topLeft
  if(board[0].teamName == 'none') {
    return board[0]
  }
}

function turnOneNaught() {
  //board[4] == midMid
  //board[7] == botLeft
   if(board[4].teamName == 'none') {
    return board[4]
   }
   else {
     return board[0]
   }
}

function turnTwoCross() {
  //board[1] == topMid
  //board[2] == topRight
  //board[6] == botLeft
  //board[4] == midMid
  if(board[4].teamName == 'naught'){
    return board[8]
  }
  else if(board[1].teamName == 'none' && board[2].teamName == 'none'){
    return board[2]
  }
  else {
    return board[6]
  }
}

function turnTwoNaught() {
  if (defend('naught')){
    return defend('naught')
  }
  else if (board[1].teamName == 'none'){
     return board[1]
      }
  else if (board[3].teamName == 'none'){
    return board[3]
  }
  else {
    return board[6]
  }
    }


function turnThreeCross(){
  // board[6] == botLeft
  // board[8] == botRight
  if(attack('cross')){
    return attack('cross')
  }
  else if(defend('cross')){
    return defend('cross')
  }
  else if(board[6].teamName == 'none' &&
          board[3].teamName == 'none'){
      return board[6]
    }
  else if(board[8].teamName == 'none'){
      return board[8]
    }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].teamName == 'none'){
        return board[i]
      }
    }
  }
}

function turnThreeNaught(){
  if(attack('naught')){
    console.log('this is and attack')
  return attack('naught')
    }
  else if(defend('naught')){
    console.log('this is a defend')
    return defend('naught')
  }
  else {
    console.log('this is a random move')
    for (var i = 0; i < board.length; i++) {
      if(board[i].teamName == 'none'){
        return board[i]
      }
    }
  }
}

function turnFourCross(){
    if(attack('cross')){
      return attack('cross')
    }
    else if(defend('cross')){
      return defend('cross')
    }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none'){
          return board[i]
        }
      }
    }
  }

function turnFourNaught(){
    // board[6] == botLeft
    // board[8] == botRight
    if(attack('naught')){
     return attack('naught')
    }
    else if(defend('naught')){
      return defend('naught')
    }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none'){
          return board[i]
        }
      }
    }
}

function turnFiveCross() {
    if(attack('cross')){
      return attack('cross')
    }
    else if(defend('cross')){
      return defend('cross')
      }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none'){
          return board[i]
        }
      }
    }
}

function resetBoard()  {
  for(var i = 0; i < board.length; i++) {
    board[i].teamName = 'none'
  }
}


module.exports = {
  turnOneNaught: turnOneNaught,
  turnTwoNaught: turnTwoNaught,
  turnThreeNaught: turnThreeNaught,
  turnFourNaught: turnFourNaught,
  turnOneCross: turnOneCross,
  turnTwoCross: turnTwoCross,
  turnThreeCross: turnThreeCross,
  turnFourCross: turnFourCross,
  turnFiveCross: turnFiveCross,
  resetBoard: resetBoard
}
