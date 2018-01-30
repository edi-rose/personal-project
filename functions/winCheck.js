var board = require('../index.js')
module.exports = {
  checkForWin: checkForWin
}


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
    if(count>2){
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
  if(count>2){
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

function checkDiagonal1(taken){
  var count = 0
  for (var i = 0; i < taken.length; i++) {
    if(taken[i] == topLeft
     ||taken[i] == midMid
     ||taken[i] == botRight){
         count ++
    }
  }
}

//fixed for new system
function getTeam(team, board) {
  var taken = []
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == team){
      taken.push(board.cells[i])
    }
  }
}
