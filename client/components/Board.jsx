import React from 'react'
var userTeam = require('../settings').userTeam
var botTeam = require('../settings').botTeam
var token = require('../settings').token
var turns = require('../../Bots/botMovesReact.js')
var board = require('../boardArray')
var checkForWin = require('../winCheck')
import ScoreBoard from './scoreBoard'
import Buttons from './buttons'

var count = 1

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
      ],
      naughtsScore: 0,
      crossesScore: 0,
      gameOver:false
    }
    this.userClick = this.userClick.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.changeTeam = this.changeTeam.bind(this)
    this.checkWins = this.checkWins.bind(this)
  }
  resetBoard() {
  for(const cell of board){
    this.claimSquare(cell, 'none')
  }
  this.setState({
    gameOver: false
  })
  this.setState({
    userPaused: false
  })
  count = 1
  if(botTeam == 'cross'){
    let cell = this.getCell()
    const {grid} = this.state
    let found
    grid.forEach(row => row.forEach(c => {
      if (c == cell) found = cell
    }))
    found.teamName = 'cross'
    this.setState({grid: grid})
  }
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
     this.setState({
       gameOver: true
     })
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
    if (this.state.gameOver) return
    if (this.state.userPaused) return
    if (cell.teamName !== 'none') return
    this.claimSquare(cell, userTeam)
    setTimeout(() => {
      var {grid} = this.state
      this.claimSquare(this.getCell(), botTeam)
      this.checkWins()
    }, 2000)
    this.checkWins()
  }
  checkWins(){
    if(checkForWin('cross')){
        this.setState({
          crossScore: this.state.crossScore + 1,
          gameOver:true
        })
      }
    if(checkForWin('naught')){
        this.setState({
          naughtsScore: this.state.naughtsScore + 1,
          gameOver:true
        })
      }
  }
  render() {
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
                  return <td onClick={() => this.userClick(cell)} className='boardMain'>
                    <div className= 'token'>{(token(cell.teamName))}</div>
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
      <div className="addOns">
      <div className="scoreBoard">
        <ScoreBoard naughtsScore = {this.state.naughtsScore} crossesScore = {this.state.crossesScore}/>
      </div>
      <div className="buttons">
        <Buttons resetBoard={this.resetBoard} changeTeam={this.changeTeam} />
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
