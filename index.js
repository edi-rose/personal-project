module.exports = {

}

var board = {}

board.cells = [
  /* top left */
  {name:'top-left', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false },
  /* top middle*/
  {name:'top-mid', isClaimed:false, isNaught:false, isCross:false, isCorner:false , isMiddle: false},
  /* top right */
  {name:'top-right', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false },
  /* middle left*/
  {name:'mid-left', isClaimed:false, isNaught:false, isCross:false, isCorner: false, isMiddle:false },
  /* middle - middle */
  {name:'mid-mid', isClaimed:false, isNaught:false, isCross:false, isCorner:false , isMiddle: true},
  /* middle right */
  {name:'mid-right', isClaimed:false, isNaught:false, isCross:false, isCorner: false , isMiddle:false },
  /* botttom left */
  {name:'bot-left', isClaimed:false, isNaught:false, isCross:false, isCorner:true , isMiddle:false },
  /* bottom middle */
  {name:'bot-mid', isClaimed:false, isNaught:false, isCross:false, isCorner: true, isMiddle:false },
  /* bottom right */
  {name:'bot-right', isClaimed:false, isNaught:false, isCross:false, isCorner: true, isMiddle: false}
];

function turnOneCross() {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].name === 'top-left') {
      board.cells[i].isCross = true;
      board.cells[i].isClaimed = true;
      console.log(board.cells[i])
    }
  }
}

 function turnOneNaught() {
   for (var i = 0; i < board.cells.length; i++) {
     if (board.cells[i].name === 'mid-mid') {
       board.cells[i].isNaught = true;
       board.cells[i].isClaimed = true;
       console.log(board.cells[i])
     }
   }
 }

function turnTwoCross() {
  for (var i = 0; i < board.cells.length; i++) {

  }
}

turnOneCross()
turnOneNaught()
