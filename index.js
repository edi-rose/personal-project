var helpers = require('./functions.js')
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

module.exports = board

function turnOneCross() {
  var square = helpers.findSquare('top-left')
  var team = 'cross'
  if(helpers.isAvailable(square)) {
    helpers.claim(square, team)
  }
}


 function turnOneNaught() {
   var square = helpers.findSquare('mid-mid')
   var team = 'naught'
   if(helpers.isAvailable(square)){
     helpers.claim(square, team)
   }
 }

function turnTwoCross() {

  var square1 = helpers.findSquare('top-mid')
  var square2 = helpers.findSquare('top-right')
  var square3 = helpers.findSquare('bot-left')
  var team = 'cross'

  if(helpers.isAvailable(square1) && helpers.isAvailable(square2)){
    helpers.claim(square2, team)
  }
  else (
    helpers.claim(sqaure3, team)
  )
}

function turnTwoNaught(){
  var team = naught
}


turnOneCross()
turnOneNaught()
turnTwoCross()
