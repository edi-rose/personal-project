var userTeam = 'cross'
var turns = require('../bots/botMovesReact')

function token(teamName) {
  if(teamName == 'none'){
    return ' '
  }
  else if(teamName == 'cross'){
    return 'u'
  }
  else if(teamName == 'naught'){
    return 'suck'
  }
}

module.exports = {
  userTeam: userTeam,
  token: token
}
