var board = require('../board.js')

function attackRows(team){
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == team &&
       board[i].col == 0 &&
       board[i+1].teamName == team &&
       board[i+2].teamName == 'none'){
         board[i+2].teamName = team
         return true
    }
    else if(board[i].teamName == team &&
            board[i].col == 0 &&
            board[i+2].teamName == team &&
            board[i+1].teamName == 'none'){
              board[i+1].teamName = team
              return true
   }
 }
 return false
}


function attackCollumns(team){
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == team &&
       board[i].row == 0 &&
       board[i+3].teamName == team &&
       board[i+6].teamName == 'none'){
        board[i+6].teamName = team
        return true
      }
      else if(board[i].teamName == team&&
              board[i].row == 0&&
              board[i+6].teamName == team&&
              board[i+3].teamName == 'none'){
                board[i+3].teamName = team
                return true
              }
    else if(board[i].teamName == team &&
            board[i].row == 1 &&
            board[i+3].teamName == team &&
            board[i-3].teamName == 'none'){
          board[i-3].teamName = team
          return true
   }
  }
  return false
}

function attackDiagonal1(team) {
  //board[0] == topLeft
  //board[4] == midMid
  //board[8] == botRight
  if(board[0].teamName == team &&
     board[4].teamName == team &&
     board[8].teamName == 'none') {
      board[8].teamName = team
      return true
    }
  else if(board[0].teamName == team &&
          board[8].teamName == team &&
          board[4].teamName == 'none'){
            board[4].teamName = team
            return true
          }
  else if(board[4].teamName == team &&
          board[8].teamName == team &&
          board[0].teamName == 'none'){
            board[0].teamName = team
            return true
          }
  else {
    return false
  }
}

function attackDiagonal2(team) {
  //board[2] == topRight
  //board[4] == midMid
  //board[6] == botLeft
    if(board[2].teamName == team &&
      board[4].teamName == team &&
      board[6].teamName == 'none') {
        board[6].teamName = team
        return true
      }
    else if(board[2].teamName == team &&
            board[6].teamName == team &&
            board[4].teamName == 'none'){
              board[4].teamName = team
              return true
            }
    else if(board[4].teamName == team &&
            board[6].teamName == team &&
            board[2].teamName == 'none'){
              board[2].teamName = team
              return true
            }
    else {
      return false
    }
}

function attack(team) {
  if(attackRows(team)){
    return true
  }
  else if(attackCollumns(team)){
    return true
  }
  else if(attackDiagonal1(team)){
    return true
  }
  else if(attackDiagonal2(team)){
    return true
  }
  return false
}

module.exports = attack

attackRows('naught')
