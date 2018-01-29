class Squares {
  constructor(teamName, row, col) {
    this.teamName = teamName,
    this.row = row,
    this.col = col
  }
  // class functions
  findSquare(name){
    for (var i = 0; i < Squares.length; i++) {
      if(Squares[i] == name){
        return Squares[i]
      }
    }
  }

  isAvailable(square){
    if(square.teamName = 'none'){
      return true
    }
    else {
      return false
    }
  }
  claimSquare(square, team){
    square.teamName = team
  }

}

let topLeft = new Squares('none', 0, 0)
let topMid = new Squares('none', 0, 1)
let topRight = new Squares('none', 0, 2)
let midLeft = new Squares('none', 1, 0)
let midMid = new Squares('none', 1, 1)
let midRight = new Squares('none', 1, 2)
let botLeft = new Squares('none', 2, 0)
let botMid = new Squares('none', 2, 1)
let botRight = new Squares('none', 2, 2)

console.log()
