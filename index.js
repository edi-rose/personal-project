var winCheck = require('./functions/winCheck.js')
var defense = require('./functions/defense.js')
var board = require('./board.js').board
var attack = require('./functions/attack.js')

function turnOneCross() {
  //board[0] == topLeft
  if(board[0].teamName == 'none') {
    board[0].claimSquare('cross')
  }
}

function turnOneNaught() {
  //board[4] == midMid
  //board[7] == botLeft
   if(board[4].teamName == 'none'){
     board[4].claimSquare('naught')
   }
   else {
     board[7].claimSquare('naught')
   }
}

function turnTwoCross() {
  //board[1] == topMid
  //bord[2] == topRight
  if(board[1].teamName == 'none' && board[2].teamName == 'none'){
    board[2].claimSquare('cross')
  }
}
function turnTwoNaught() {
  if (defense.defend('naught')){
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
  if(attack('cross')){
    if(winCheck.checkForWin('cross')){
      console.log('crosses win!!')
    }
    return
  }
  else if(defense.defend('cross')){
    return
  }
  else if(board[6].teamName == 'none'){
      board[6].claimSquare('cross')
      return
    }
  else if(board[8].teamName == 'none'){
      board[8].claimSquare('cross')
      return
    }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].teamName == 'none'){
        board[i].claimSquare('cross')
        return
      }
    }
  }
  if(winCheck.checkForWin('cross')){
    console.log('crosses win!!')
  }
}

function turnThreeNaught(){
  if(attack('naught')){
    if(winCheck.checkForWin('naught')){
      console.log('naught win!!')
    }
    return
  }
  else if(defense.defend('naught')){
    return
  }
  else {
    for (var i = 0; i < board.length; i++) {
      if(board[i].teamName == 'none'){
        board[i].claimSquare('naught')
        return
      }
    }
  }
  if(winCheck.checkForWin('naught')){
    console.log('naught win!!')
  }
}

function turnFourCross(){
    if(attack('cross')){
      if(winCheck.checkForWin('cross')){
        console.log('crosses win!!')
      }
      return
    }
    else if(defense.defend('cross')){
      return
    }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none'){
          board[i].claimSquare('cross')
          return
        }
      }
    }
    if(winCheck.checkForWin('cross')){
      console.log('crosses win!!')
    }
  }

function turnFourNaught(){
    // board[6] == botLeft
    // board[8] == botRight
    if(attack('naught')){
      if(winCheck.checkForWin('naught')){
        console.log('naughts win!!')
      }
      return
    }
    else if(defense.defend('naught')){
      return
    }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none'){
          board[i].claimSquare('naught')
          return
        }
      }
    }
    if(winCheck.checkForWin('naught')){
      console.log('naughts win!!')
    }
}

function turnFiveCross() {
    if(attack('cross')){
      if(winCheck.checkForWin('cross')){
        console.log('crosses win!!')
      }
      return
    }
    else if(defense.defend('cross')){
      return
      }
    else {
      for (var i = 0; i < board.length; i++) {
        if(board[i].teamName == 'none'){
          board[i].claimSquare('cross')
        }
      }
    }
    if(winCheck.checkForWin('cross')){
      console.log('crosses win!!')
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
