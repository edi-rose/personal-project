class Cell extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      teamName:props.teamName,
      row:props.row,
      col:props.col
  }
  this.isAvailable = this.isAvailable.bind(this)
  this.claimSquare = this.claimSquare.bind(this)
}
  // class functions
  isAvailable() {
    if(this.teamName == 'none'){
      return true
    }
    return false
  }
  claimSquare(team){
     this.setState({teamName = team})
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

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

export default Cell
