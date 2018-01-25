var helpers = require('./functions.js')
var board = {}

board.cells = [
  /* top left */
  {name:'top-left', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false },
  /* top middle*/
  {name:'top-mid', isClaimed:false, isNaught:false, isCross:false, isCorner:false , isMiddle: false},
  /* top right */
  {name:'top-right', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false, isRowEnd:true},
  /* middle left*/
  {name:'mid-left', isClaimed:false, isNaught:false, isCross:false, isCorner: false, isMiddle:false },
  /* middle - middle */
  {name:'mid-mid', isClaimed:false, isNaught:false, isCross:false, isCorner:false , isMiddle: true},
  /* middle right */
  {name:'mid-right', isClaimed:false, isNaught:false, isCross:false, isCorner: false , isMiddle:false, isRowEnd:true },
  /* botttom left */
  {name:'bot-left', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false },
  /* bottom middle */
  {name:'bot-mid', isClaimed:false, isNaught:false, isCross:false, isCorner: true, isMiddle:false },
  /* bottom right */
  {name:'bot-right', isClaimed:false, isNaught:false, isCross:false, isCorner: true, isMiddle: false, isRowEnd: true}
];

module.exports = board
console.log(board.cells)
function turnOneCross() {
  var square = helpers.findCell('top-left')
  var team = 'cross'
  if(helpers.isAvailable(square)) {
    helpers.claim(square, team)
  }
}


 function turnOneNaught() {
   var square = helpers.findCell('mid-mid')
   var team = 'naught'
   if(helpers.isAvailable(square)){
     helpers.claim(square, team)
   }
 }

function turnTwoCross() {

  var square1 = helpers.findCell('top-mid')
  var square2 = helpers.findCell('top-right')
  var square3 = helpers.findCell('bot-left')
  var team = 'cross'

  if(helpers.isAvailable(square1) && helpers.isAvailable(square2)){
    helpers.claim(square2, team)
  }
  else (
    helpers.claim(sqaure3, team)
  )
}


//untested
function checkRows(team) {
  if(team == 'cross') {
    for (var i = 0; i < board.cells.length; i++) {
      //find naughts
      if(board.cells[i].isNaught && board.cells[i+1].isNaught){
        if(board.cells[i+1].isRowEnd && !board.cells[i-2].isClaimed){
          board.cells[i-2].isCross = true
          board.cells[i-2].isClaimed = true
        }
        else if(!board.cells[i+1].isRowEnd && !board.cells[i+2].isClaimed){
          board.cells[i+2].isCross = true
          board.cells[i+2].isClaimed = true
        }
      }
    }
  }

turnOneCross()
turnOneNaught()
turnTwoCross()
