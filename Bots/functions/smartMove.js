var board = require('../../client/boardArray')

// lines array format [rowNumber, collumNumber, D1(if applicable), D2(if applicable)]

function smartMove(team) {
  for (var i = 0; i <board.length; i++) {
    if(board[i].teamName !== 'none'){
    continue
     }
    let values= getValues(board[i])
        //lines is an array of the different col, row, and diagonal values of each cell
    if(checkLines(values, team)){
      return board[i]
      break
   }
}
  return false
}

//Gathers all the values of the cell's key value pairs
function getValues(cell){
  let array= []
  array.push(cell.row)
  array.push(cell.col)
  if(cell.D1){
    array.push(true)
  }
  else if(!cell.D1){
    array.push(false)
  }
  if(cell.D2){
    array.push(true)
  }
  else if(!cell.D2){
    array.push(false)
  }
  return array
}

function checkLines(values, team){
  let count = 0
  if(checkLine('row', values[0], team)){
    count ++
  }
  if (checkLine('col', values[1], team)){
    count ++
  }
  if (checkLine('D1', values[2], team)){
    count ++
  }
  if (checkLine('D2', values[3], team)){
    count ++
  }
  if (count > 1){
    return true
  }
  else {
    return false
  }
}


function checkLine (lineType, unit, team){
  let arr = getEachLane(lineType, unit)
  let count = 0
  let noneCount = 0
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].teamName == team){
        count ++
      }
    if(arr[i].teamName == 'none' && noneCount < 2){
         count ++
         noneCount ++
       }
  }
  if(count == 3){
    return true
  }
  else{
    return false
  }
}


function getEachLane(lineType, unit){
  let line = []
  for (var i = 0; i < board.length; i++) {
    if(board[i][lineType] == unit){
      line.push(board[i])
    }
  }
  return line

}
module.exports = {smartMove: smartMove}
