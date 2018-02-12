//var checkForWin = require('../client/winCheck.js')
var defend = require('./functions/defense.js')
var board = require('../client/boardArray')
var attack = require('./functions/attack.js')

// function turnOneCross() {
//   //board[0] == topLeft
//   if(board[0].isAvailable()) {
//     return board[0]
//   }
// }
//
function turnOneNaught() {
  console.log('turnOne')
  //board[4] == midMid
  //board[7] == botLeft
   if(board[4].teamName == 'none') {
    return board[4]
   }
   else {
     return board[0]
   }
}
//
// function turnTwoCross() {
//   //board[1] == topMid
//   //board[2] == topRight
//   //board[6] == botLeft
//   if(board[1].isAvailable() && board[2].isAvailable()){
//     board[2].claimSquare('cross')
//   }
//   else {
//     board[6].claimSquare('cross')
//   }
// }
//
function turnTwoNaught() {
  if (defend('naught')){
    return defend('naught')
  }
  else if (board[2].teamName == 'none'){
     return board[2]
      }
  else if (board[0].teamName == 'none'){
    return board[0]
  }
  else {
    return board[6]
  }
    }


// function turnThreeCross(){
//   // board[6] == botLeft
//   // board[8] == botRight
//   if(attack('cross')){
//     if(checkForWin('cross')){
//       console.log('crosses win!!')
//     }
//     return
//   }
//   else if(defend('cross')){
//     console.log('hello')
//     return
//   }
//   else if(board[6].isAvailable()){
//       board[6].claimSquare('cross')
//       return
//     }
//   else if(board[8].isAvailable()){
//       board[8].claimSquare('cross')
//       return
//     }
//   else {
//     for (var i = 0; i < board.length; i++) {
//       if(board[i].isAvailable()){
//         board[i].claimSquare('cross')
//         return
//       }
//     }
//   }
//   if(checkForWin('cross')){
//     console.log('crosses win!!')
//   }
// }
//
function turnThreeNaught(){
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
//
// function turnFourCross(){
//     if(attack('cross')){
//       if(checkForWin('cross')){
//         console.log('crosses win!!')
//       }
//       return
//     }
//     else if(defend('cross')){
//       return
//     }
//     else {
//       for (var i = 0; i < board.length; i++) {
//         if(board[i].isAvailable()){
//           board[i].claimSquare('cross')
//           return
//         }
//       }
//     }
//     if(checkForWin('cross')){
//       console.log('crosses win!!')
//     }
//   }
//
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
//
// function turnFiveCross() {
//     if(attack('cross')){
//       if(checkForWin('cross')){
//         console.log('crosses win!!')
//       }
//       return
//     }
//     else if(attack('naught')){
//       return
//       }
//     else {
//       for (var i = 0; i < board.length; i++) {
//         if(board[i].isAvailable()){
//           board[i].claimSquare('cross')
//           return
//         }
//       }
//     }
//     if(checkForWin('cross')){
//       console.log('crosses win!!')
//     }
// }
//
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
  resetBoard: resetBoard
}
