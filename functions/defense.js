var board = require('../board.js')
console.log(board)

function defendRows(team) {
  var enemyTeam = ''
  if(team == 'cross'){
    enemyTeam = 'naught'
  }
  else {
    enemyTeam = 'cross'
  }
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].col == 0 &&
       board[i+1].teamName == enemyTeam &&
       board[i+2].teamName == 'none'){
      board[i+2].teamName == team
      return true
        }
    else if(board[i].teamName == enemyTeam &&
            board[i].col == 1 &&
            board[i+1].teamName == enemyTeam &&
            board[i-1].teamName == 'none'){
          board[i-1].teamName == team
          return true
    }
    else {
      return false
    }
  }
}

function defendCollumns(team) {
  
  var enemyTeam = ''
  if(team == 'cross'){
     enemyTeam = 'naught'
  }
  else {
     enemyTeam = 'cross'
  }
  for (var i = 0; i < board.length; i++) {
    console.log('hello')
    if(board[i].teamName == enemyTeam &&
       board[i].row == 0 &&
       board[i+3].teamName == enemyTeam &&
       board[i+6].teamName == 'none'){
        board[i+6].teamName == team
        return true
      }
    else if(board[i].teamName == enemyTeam &&
            board[i].row == 1 &&
            board[i+3].teamName == enemyTeam &&
            board[i-3].teamName == 'none'){
          board[i-3].teamName == team
          return true
   }
   return false
  }
}

function defendDiagonal1(team) {
  var enemyTeam = ''
  if(team == 'cross'){
     enemyTeam = 'naught'
  }
  else {
     enemyTeam = 'cross'
  }
    if(board.topLeft.teamName == enemyTeam &&
       board.midMid.teamName == enemyTeam &&
       board.botRight.teamName == 'none') {
        board.botRight.teamName = team
        return true
      }
    else if(board.topLeft.teamName == enemyTeam &&
            board.botRight.teamName == enemyTeam &&
            board.midMid.teamName == 'none'){
              board.midMid.teamName == team
              return true
            }
    else if(board.midMid.teamName == enemyTeam &&
            board.botRight.teamName == enemyTeam &&
            board.topLeft.teamName == 'none'){
              board.topLeft.teamName == team
              return true
            }
    else {
      return false
    }
}

function defendDiagonal2(team) {
  var enemyTeam = ''
  if(team == 'cross'){
     enemyTeam = 'naught'
  }
  else {
     enemyTeam = 'cross'
  }
    if(board.topRight.teamName == enemyTeam &&
      board.midMid.teamName == enemyTeam &&
      board.botLeft.teamName == 'none') {
        board.botLeft.teamName = team
        return true
      }
    else if(board.topRight.teamName == enemyTeam &&
            board.botLeft.teamName == enemyTeam &&
            board.midMid.teamName == 'none'){
              board.midMid.teamName == team
              return true
            }
    else if(board.midMid.teamName == enemyTeam &&
            board.botLeft.teamName == enemyTeam &&
            board.topRight.teamName == 'none'){
              board.topRight.teamName == team
              return true
            }
    else {
      return false
    }
}


function Defend(team) {
  if(defendRows(team)){
    return true
  }
  else if(defendCollumns(team)){
    return true
  }
  else if(defendDiagonal1(team)){
    return true
  }
  else if(defendDiagonal2(team)){
    return true
  }
  return false
}

module.exports = {
  Defend: Defend
}
