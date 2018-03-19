function defendPin(board) {
  if(board[0].teamName == 'cross' &&
     board[4].teamName == 'naught' &&
     board[8].teamName == 'cross'){
       return board[1]
     }
  else if(board[2].teamName == 'cross' &&
          board[4].teamName == 'naught' &&
          board[6].teamName == 'cross'){
            return board[1]
          }
  else {
    return false
  }
}

module.exports = {defendPin: defendPin}
