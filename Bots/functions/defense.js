//working
function defendRows(team, board) {
  var enemyTeam = findEnemy(team)
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].col == 0 &&
       board[i+1].teamName == enemyTeam &&
       board[i+2].teamName == 'none'){
        return board[i+2]
        }
    else if(board[i].teamName == enemyTeam&&
            board[i].col == 0&&
            board[i+2].teamName == enemyTeam&&
            board[i+1].teamName == 'none'){
            return board[i+1]
    }
    else if(board[i].teamName == enemyTeam&&
            board[i].col == 1&&
            board[i+1].teamName == enemyTeam&&
            board[i-1].teamName == 'none'){
              return board[i-1]
            }
  }
    return false
}


//working
function defendCollumns(team, board) {
  var enemyTeam = findEnemy(team)
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].row == 0 &&
       board[i+3].teamName == enemyTeam &&
       board[i+6].teamName == 'none'){
       return board[i+6]

      }
      else if(board[i].teamName == enemyTeam&&
              board[i].row == 0&&
              board[i+6].teamName == enemyTeam&&
              board[i+3].teamName == 'none'){
                return board[i+3]
              }
    else if(board[i].teamName == enemyTeam &&
            board[i].row == 1 &&
            board[i+3].teamName == enemyTeam &&
            board[i-3].teamName == 'none'){
            return board[i-3]
   }
  }
  return false
}

//untested
function defendDiagonal1(team, board) {
  var enemyTeam = findEnemy(team)
  //board[0] == topLeft
  //board[4] == midMid
  //board[8] == botRight
    if(board[0].teamName == enemyTeam &&
       board[4].teamName == enemyTeam &&
       board[8].teamName == 'none') {
        return board[8]
      }
    else if(board[0].teamName == enemyTeam &&
            board[8].teamName == enemyTeam &&
            board[4].teamName == 'none'){
              return board[4]
            }
    else if(board[4].teamName == enemyTeam &&
            board[8].teamName == enemyTeam &&
            board[0].teamName == 'none'){
              return board[0]
            }
    else {
      return false
    }
}

function defendDiagonal2(team, board) {
  var enemyTeam = findEnemy(team)
  //board[2] == topRight
  //board[4] == midMid
  //board[6] == botLeft
    if(board[2].teamName == enemyTeam &&
      board[4].teamName == enemyTeam &&
      board[6].teamName == 'none') {
        return board[6]
      }
    else if(board[2].teamName == enemyTeam &&
            board[6].teamName == enemyTeam &&
            board[4].teamName == 'none'){
              return board[4]
            }
    else if(board[4].teamName == enemyTeam &&
            board[6].teamName == enemyTeam &&
            board[2].teamName == 'none'){
              return board[2]
            }
    else {
      return false
    }
}

function defend(team, board) {
  if(defendRows(team, board)){
    return (defendRows(team, board))
  }
  else if(defendCollumns(team, board)){
    return defendCollumns(team, board)
  }
  else if(defendDiagonal1(team, board)){
    return defendDiagonal1(team, board)
  }
  else if(defendDiagonal2(team, board)){
    return defendDiagonal2(team, board)
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

module.exports = {
  defend: defend,
  defendRows: defendRows,
  defendCollumns: defendCollumns,
  defendDiagonal1: defendDiagonal1,
  defendDiagonal2: defendDiagonal2
 }
