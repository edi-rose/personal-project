module.exports = {
  findSquare: findSquare,
  isAvailable: isAvailable,
  claim: claim
}

function findSquare(name, board) {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].name === name) {
      return board.cells[i]
    }
    }
  }

function isAvailable(square){
  if(square.teamName === 'none'){
    return true
  }
  else{
    return false
  }
}

function claim(square, team) {
    square.teamName = team
}
