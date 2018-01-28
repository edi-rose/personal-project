
module.exports = {
  findSquare: findSquare,
  isAvailable: isAvailable,
  claim: claim,
  printGame: printGame
}

var board = require('../index.js')


function findSquare(name) {
  var board = require('./index.js')
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].name === name) {
      return board.cells[i]

    }
    }
  }

function isAvailable(square){
  var board = require('./index.js')
  if(square.teamName === 'none'){
    return true
  }
  else{
    return false
  }
}

function claim(square, team) {
  var board = require('./index.js')
    square.teamName = team
}

function printGame(){
  for(var i = 0; i < board.cells.length; i++) {
    console.log(board.cells[i].name + ': ' + board.cells[i].teamName)
}
}
