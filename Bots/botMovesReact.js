
var defend = require('./functions/defense.js')
var board = require('../client/boardArray')
var attack = require('./functions/attack.js')
var smartMove = require('./functions/smartMove.js').smartMove
var defendPin = require('./functions/DefendDoublePin').defendPin

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
  else if(board[7].teamName == 'naught'){
    return board[6]
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
  else if(defendPin()){
    return defendPin()
  }
  else if(smartMove('naught')){
    return smartMove('naught')
  }
  else if(smartMove('cross')){
    return smartMove('cross')
  }
  else {
    return board[8]
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
  else if(smartMove('cross')){
    return smartMove('cross')
  }
  else if(smartMove('cross')){
    return smartMove('cross')
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
  return attack('naught')
    }
  else if(defend('naught')){
    return defend('naught')
  }
  else if(smartMove('naught')){
    return smartMove('naught')
  }
  else if(smartMove('cross')){
    return smartMove('cross')
  }
  else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none' &&
           board[i] !== board[0]&&
           board[i] !== board[2]&&
           board[i] !== board[6]&&
           board[i] !== board[8]){
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
    else if(smartMove('cross')){
      return smartMove('cross')
    }
    else if(smartMove('cross')){
      return smartMove('cross')
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
    else if(smartMove('naught')){
      return smartMove('naught')
    }
    else if(smartMove('cross')){
      return smartMove('cross')
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
      else if(smartMove('cross')){
        return smartMove('cross')
      }
      else if(smartMove('cross')){
        return smartMove('cross')
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
