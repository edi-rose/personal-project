var board = require('../index.js')

function defendRows(enemyTeam, team) {
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].col == 0 &&
       board[i+1].teamName == enemyTeam &&
       board[i+2].teamName == 'none'){
      board[i+2].teamName == team
      count = count + 1
      return 
        }
    else if(board[i].teamName == enemyTeam &&
            board[i].col == 1 &&
            board[i+1].teamName == enemyTeam
            board[i-1].teamName == 'none'){
          board[i-1].teamName == team
          count = count + 1
          return
    }
  }
}

function defendCollumns(enemyTeam, team, count)
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam &&
       board[i].row == 0 &&
       board[i+3].teamName == enemyTeam &&
       board[i+6].teamName == 'none'){
        board[i+6].teamName == team
        count = count + 1
        return
      }
    else if(board[i].teamName == enemyTeam &&
            board[i].row == 1 &&
            board[i+3].teamName == enemyTeam
            board[i-3].teamName == 'none'){
          board[i-3].teamName == team
          count = count + 1
          return
   }
}

function defendDiagonal(enemyTeam, team){
  if()
}
