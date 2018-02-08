var userTeam = 'cross'

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
  token: token
}
