
module.exports = {
  findSquare: findSquare,
  isAvailable: isAvailable,
  claim: claim
}

var board = require('./index.js')


function findCell(name) {
  var board = require('./index.js')
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].name === name) {
      return board.cells[i]

    }
    }
  }

function isAvailable(square){
  var board = require('./index.js')
  if(square.isClaimed === false){
    return true
  }
  else{
    return false
  }
}

function claim(square, team) {
  var board = require('./index.js')
  if(team == 'naught') {
    square.isNaught == true
    square.isClaimed == true
  }
  else if( team == 'cross') {
    square.isCross = true
    square.isClaimed = true
  }
  else {
    return ('error, invalid team name')
    console.log('error, invalid teamname')
  }
}
