var board = require('../board.js')

function checkForWin(team){
  var taken = getTeam(team)
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

function checkCol(col, taken){
  var count = 0
  
  for (var i = 0; i < taken.length; i++) {
    if(taken[i].col == col){
      count++
    }
    }
    if(count > 2){
      return true
    }
    else{
      return false
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

function checkRow(row, taken) {
var count = 0
for (var i = 0; i < taken.length; i++) {
  if(taken[i].row == row){
    count++
  }
}
if(count > 2){
  return true
}
else{
  return false
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

//board[2] == topRight
//board[4] == midMid
//board[6] == botLeft
function checkDiagonal1(taken){
  var count = 0
  for (var i = 0; i < taken.length; i++) {
    if(taken[i] == board[2]
     ||taken[i] == board[4]
     ||taken[i] == board[6]){
         count ++
    }
  }
  if(count> 2){
    return true
  }
  else{
    return false
  }
}

//board[0]
//board[4]
//board[8]
function checkDiagonal2(taken){
  var count = 0
  for (var i = 0; i < taken.length; i++) {
    if(taken[i] == board[0]
     ||taken[i] == board[4]
     ||taken[i] == board[8]){
         count ++
    }
  }
  if(count > 2){
    return true
  }
  else {
    return false
  }
}

//working
function getTeam(team) {
  return board.filter(x => x.teamName == team)
}

module.exports = checkForWin
