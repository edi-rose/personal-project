var board = require('../../client/boardArray')

function attackRows(team){
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == team &&
       board[i].col == 0 &&
       board[i+1].teamName == team &&
       board[i+2].teamName == 'none'){
         return board[i+2]
    }
    else if(board[i].teamName == team &&
            board[i].col == 0 &&
            board[i+2].teamName == team &&
            board[i+1].teamName == 'none'){
              return board[i+1]
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
        return board[i+6]

      }
      else if(board[i].teamName == team&&
              board[i].row == 0&&
              board[i+6].teamName == team&&
              board[i+3].teamName == 'none'){
                return board[i+3]
              }
    else if(board[i].teamName == team &&
            board[i].row == 1 &&
            board[i+3].teamName == team &&
            board[i-3].teamName == 'none'){
          return board[i-3]
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
      return board[8]
    }
  else if(board[0].teamName == team &&
          board[8].teamName == team &&
          board[4].teamName == 'none'){
            return board[4]

          }
  else if(board[4].teamName == team &&
          board[8].teamName == team &&
          board[0].teamName == 'none'){
            return board[0]
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
        return board[6]
      }
    else if(board[2].teamName == team &&
            board[6].teamName == team &&
            board[4].teamName == 'none'){
              return board[4]
            }
    else if(board[4].teamName == team &&
            board[6].teamName == team &&
            board[2].teamName == 'none'){
              return board[2]
            }
    else {
      return false
    }
}

function attack(team) {
  if(attackRows(team)){
    return attackRows(team)
  }
  else if(attackCollumns(team)){
    return attackCollumns(team)
  }
  else if(attackDiagonal1(team)){
    return attackDiagonal1(team)
  }
  else if(attackDiagonal2(team)){
    return attackDiagonal2(team)
  }
  return false
}

module.exports = attack
