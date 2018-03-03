import React from 'react'
var userTeam = require('../settings').userTeam
var botTeam = require('../settings').botTeam
var token = require('../settings').token
var turns = require('../../Bots/botMovesReact.js')
var board = require('../boardArray')
var checkForWin = require('../winCheck')

var count = 1
var naughtsScore = 0
var crossesScore = 0
var gameOver = false


class Board extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]]
        // [topLeft,topMid,topRight],
        // [midLeft,midMid,midRight],
        // [botLeft,botMid,botRight]
      ]
    }
    this.userClick = this.userClick.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.changeTeam = this.changeTeam.bind(this)
  }
  resetBoard() {
  for(const cell of board){
    this.claimSquare(cell, 'none')
  }
  count = 1
  gameOver = false
  }
  getCell(){
    if(botTeam == 'naught'){
    if (count == 1) {
      count ++
      return turns.turnOneNaught()
    }
    else if (count == 2) {
      count ++
      return turns.turnTwoNaught()
    }
    else if (count == 3) {
      count ++
      return turns.turnThreeNaught()
    }
    else if (count == 4) {
      count ++
      return turns.turnFourNaught()
    }
    else {
      alert('draw... as usual')
    }
  }
    if(botTeam == 'cross')
    if(count == 1){
      count ++
      return turns.turnOneCross()
    }
    else if (count == 2) {
      count ++
      return turns.turnTwoCross()
    }
    else if (count == 3) {
      count ++
      return turns.turnThreeCross()
    }
    else if (count == 4) {
      count ++
      return turns.turnFourCross()
    }
    else if(count == 5) {
      count ++
      return turns.turnFiveCross()
    }
    else {
      alert('draw... as usual')
      gameOver = true
    }
  }
  claimSquare(cell, team){
    const {grid} = this.state
    let found
    grid.forEach(row => row.forEach(c => {
      if (c == cell) found = cell
    }))
    found.teamName = team
    this.setState({grid, userPaused: !this.state.userPaused})
  }
  changeTeam() {
    if(userTeam == 'cross'){
      userTeam = 'naught'
      botTeam = 'cross'
    }
    else {
      userTeam = 'cross'
      botTeam = 'naught'
    }
    this.resetBoard()
  }
  userClick(cell) {
    if (gameOver) return
    if (this.state.userPaused) return
    if (cell.teamName !== 'none') return
    this.claimSquare(cell, userTeam)
    setTimeout(() => {
      var {grid} = this.state
      this.claimSquare(this.getCell(), botTeam)
    }, 2000)
  }

  render() {
    if(botTeam == 'cross' && count == 1){
      this.claimSquare(this.getCell(), botTeam)
    }
    if(checkForWin(userTeam)){
      if(botTeam == 'naught'){
        naughtsScore ++
      }
      else {
        crossesScore ++
      }
      alert('Please email me at edirose1998@gmail.com telling me how you won!! Congratulations')
      gameOver = true
    }
    if(checkForWin(botTeam)){
      if(botTeam == 'naught'){
        naughtsScore ++
      }
      else{
        crossesScore ++
      }
      alert(botTeam + ' wins! Try Again!')
      gameOver= true
    }
    return (
      <div>
        <div className="game">
        <table style={{
          border: 'thin solid black'
        }}>
        <tbody>
          {this.state.grid && this.state.grid.map((row) => {
            return (
              <tr style={{
                border: 'thin solid black'
              }}>
                {row.map((cell) => {
                  return <td onClick={() => this.userClick(cell)} style={{
                    border: 'thin solid black',
                    padding: '15px',
                    height: '100px',
                    width: '90px'
                  }}>
                    <div className= 'token'>{(token(cell.teamName))}</div>
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
      <div class="addOns">
      <div className="scoreBoard">
        <p> Naughts: {naughtsScore}  Crosses: {crossesScore} </p>
      </div>
      <div className="buttons">
        <button onClick= {() =>this.resetBoard()}>Try Again</button>
        <button onClick={() => this.changeTeam()}>Change Teams</button>
      </div>
      </div>
    </div>
    )
  }
}

function isAvailable(cell) {
  if(cell.teamName == 'none'){
    return true
  }
  return false
}

module.exports = {
  Board: Board
}
