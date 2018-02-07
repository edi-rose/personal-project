var board = require('../../client/board.js')

//working
function defendRows(team) {
  var enemyTeam = findEnemy(team)
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].col == 0 &&
       board[i+1].teamName == enemyTeam &&
       board[i+2].teamName == 'none'){
        board[i+2].teamName = team
      return true
        }
    else if(board[i].teamName == enemyTeam&&
            board[i].col == 0&&
            board[i+2].teamName == enemyTeam&&
            board[i+1].teamName == 'none'){
              board[i+1].teamName = team
              return true
    }
  }
    return false
}


//working
function defendCollumns(team) {
  var enemyTeam = findEnemy(team)
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].row == 0 &&
       board[i+3].teamName == enemyTeam &&
       board[i+6].teamName == 'none'){
        board[i+6].teamName = team
        return true
      }
      else if(board[i].teamName == enemyTeam&&
              board[i].row == 0&&
              board[i+6].teamName == enemyTeam&&
              board[i+3].teamName == 'none'){
                board[i+3].teamName = team
                return true
              }
    else if(board[i].teamName == enemyTeam &&
            board[i].row == 1 &&
            board[i+3].teamName == enemyTeam &&
            board[i-3].teamName == 'none'){
          board[i-3].teamName = team
          return true
   }
  }
  return false
}

//untested
function defendDiagonal1(team) {
  var enemyTeam = findEnemy(team)
  //board[0] == topLeft
  //board[4] == midMid
  //board[8] == botRight
    if(board[0].teamName == enemyTeam &&
       board[4].teamName == enemyTeam &&
       board[8].teamName == 'none') {
        board[8].teamName = team
        return true
      }
    else if(board[0].teamName == enemyTeam &&
            board[8].teamName == enemyTeam &&
            board[4].teamName == 'none'){
              board[4].teamName = team
              return true
            }
    else if(board[4].teamName == enemyTeam &&
            board[8].teamName == enemyTeam &&
            board[0].teamName == 'none'){
              board[0].teamName = team
              return true
            }
    else {
      return false
    }
}

function defendDiagonal2(team) {
  var enemyTeam = findEnemy(team)
  //board[2] == topRight
  //board[4] == midMid
  //board[6] == botLeft
    if(board[2].teamName == enemyTeam &&
      board[4].teamName == enemyTeam &&
      board[6].teamName == 'none') {
        board[6].teamName = team
        return true
      }
    else if(board[2].teamName == enemyTeam &&
            board[6].teamName == enemyTeam &&
            board[4].teamName == 'none'){
              board[4].teamName = team
              return true
            }
    else if(board[4].teamName == enemyTeam &&
            board[6].teamName == enemyTeam &&
            board[2].teamName == 'none'){
              board[2].teamName = team
              return true
            }
    else {
      return false
    }
}

function defend(team) {
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

function findEnemy(team){
  if(team == 'cross'){
    return 'naught'
  }
  else {
    return 'cross'
  }
}

module.exports = defend
