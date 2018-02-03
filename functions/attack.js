var board = require('../board.js').board
var findEnemy = require('../board.js').findEnemy

function attackRows(team){
  var enemyTeam = findEnemy(team)
  console.log(enemyTeam)

}


attackRows('naught')
