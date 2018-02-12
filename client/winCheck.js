var board = require('./boardArray.js')

function checkForWin(team){
  var taken = getTeam(team)
  if (checkRows(taken)
  ||checkCollumns(taken)
  ||checkDiagonals(taken)){
    return true
  }
  return false
}

function checkCollumns(taken){
  if(checkCol(0, taken)
   ||checkCol(1, taken)
   ||checkCol(2, taken)){
    return true
  }
  return false
}

function checkCol(col, taken){
  var count = 0
  taken.filter(x => x.col == col).forEach(x => count ++)
  return countCheck(count)
}

function checkRows(taken){
  if(checkRow(0, taken)
   ||checkRow(1, taken)
   ||checkRow(2, taken)){
    return true
  }
  return false
}

function checkRow(row, taken) {
  var count = 0
  taken.filter(x => x.row == row).forEach(x => count ++)
  return countCheck(count)
}

function checkDiagonals(taken){
  if(checkDiagonal1(taken)||checkDiagonal2(taken)){
    return true
  }
    return false
}

//board[2] == topRight
//board[4] == midMid
//board[6] == botLeft
function checkDiagonal1(taken){
  var count = 0
   taken.filter(x => x == board[2] || x == board[4] || x == board[6]).forEach(x => count ++)
  return countCheck(count)
}
//board[0]
//board[4]
//board[8]
function checkDiagonal2(taken){
  var count = 0
  taken.filter(x => x == board[0] || x == board[4] || x == board[8]).forEach(x => count ++)
 return countCheck(count)
}

//working
function getTeam(team) {
  return board.filter(x => x.teamName == team)
}

function countCheck(count) {
  if(count == 3){
    return true
  }
  else if(count < 3){
    return false
  }
  else {
    console.log('WIN CHECK ERROR')
  }
  }

module.exports = checkForWin
