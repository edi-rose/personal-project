var userTeam = 'cross'
var botTeam = 'naught'
var turns = require('../Bots/botMovesReact')

function token(teamName) {
  if(teamName == 'none'){
    return ' '
  }
  else if(teamName == 'cross'){
    return 'x'
  }
  else if(teamName == 'naught'){
    return 'o'
  }
}

module.exports = {
  userTeam: userTeam,
  token: token,
  botTeam: botTeam

}
