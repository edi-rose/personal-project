var board = require('../index.js')
module.exports = {
  checkForWin: checkForWin,
}

//untested
function checkForWin(team){
  var taken = getTeam(team, board)
  if (checkRows(taken)
  ||checkCollumns(taken)
  ||checkDiagonals(taken)){
    return true
  }
  else{
    return false
  }
}

function checkCollumns(taken){
  if(checkCol(0, taken)
   ||checkCol(1, taken)
   ||checkCol(2, taken)){
    return true
  }
  else {
    return false
  }
}

function checkCol(taken, col){
  var count = 0
  for (var i = 0; i < taken.length; i++) {
    if(taken[i].col == col){
      count++
    }
    if(count == 3){
      return true
    }
    else{
      return false
    }
  }
}

function checkRows(taken){
  if(checkRow(0, taken)
   ||checkRow(1, taken)
   ||checkRow(2, taken)){
    return true
  }
  else {
    return false
  }
}

function checkRow(taken, row) {
var count = 0
for (var i = 0; i < taken.length; i++) {
  if(taken[i].row == row){
    count++
  }
  if(count == 3){
    return true
  }
  else{
    return false
  }
}
}

function checkDiagonals(taken){
  if(checkDiagonal1(taken)||checkDiagonal2(taken)){
    return true
  }
  else {
    return false
  }
}

function checkDiagonal1(taken){
  var count = 0
  for (var i = 0; i < taken.length; i++) {
    if(taken[i] == topRight
     ||taken[i] == midMid
     ||taken[i] == botLeft){
         count ++
    }
  }
}

function checkDiagonal2(taken){
  var count = 0
  for (var i = 0; i < taken.length; i++) {
    if(taken[i] == topLeft
     ||taken[i] == midMid
     ||taken[i] == botRight){
         count ++
    }
  }
}

function getTeam(team, board) {
  var taken = []
  var taken = board.map(x => x.teamName == team)
  // for (var i = 0; i < board.length; i++) {
  //   if(board[i].teamName == team){
  //     taken.push(board.cells[i])
  //   }
  // }
  console.log(taken)
}
