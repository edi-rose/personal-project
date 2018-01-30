var board = require('../index.js')
console.log(board)

function getEnemySquares(enemyTeam) {
  var enemySquares = []
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == enemyTeam){
      enemySquares.push(board[i])
    }
   }
   console.log(enemySquares)
}

getEnemySquares('cross')
