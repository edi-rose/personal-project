

class Squares {
  constructor(teamName, row, col) {
    this.teamName = teamName,
    this.row = row,
    this.col = col
  }
  // class functions
  isAvailable(){
    if(this.teamName = 'none'){
      return true
    }
    else {
      return false
    }
  }
  claimSquare(team){
     this.teamName = team
  }
}

//board
let topLeft = new Squares('cross', 0, 0)
let topMid = new Squares('cross', 0, 1)
let topRight = new Squares('cross', 0, 2)
let midLeft = new Squares('none', 1, 0)
let midMid = new Squares('none', 1, 1)
let midRight = new Squares('none', 1, 2)
let botLeft = new Squares('none', 2, 0)
let botMid = new Squares('none', 2, 1)
let botRight = new Squares('none', 2, 2)

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

module.exports = board
