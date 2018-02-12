import React from 'react'
var userTeam = require('../settings').userTeam
var token = require('../settings').token
var turns = require('../../Bots/botMovesReact.js')
var getCell = require('../settings').getCell
var board = require('../boardArray')
var checkForWin = require('../winCheck')

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
      ]
    }
    this.userClick = this.userClick.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }
  resetBoard() {
    for(const cell of board){
      this.claimSquare(cell, 'none')
    }
  }
  getCell(){
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
  claimSquare(cell, team){
    const {grid} = this.state
    let found
    grid.forEach(row => row.forEach(c => {
      if (c == cell) found = cell
    }))
    found.teamName = team
    if(checkForWin('naught')){
      alert('Bot Wins!')
      count = 1
    }
    else if(checkForWin('cross')){
      alert('email me at edirose1998@gmail.com telling me how you did this')
      count = 1
    }
    this.setState({grid, userPaused: !this.state.userPaused})
  }
  userClick(cell) {
    if (this.state.userPaused) return
    this.claimSquare(cell, userTeam)
    setTimeout(() => {
      var {grid} = this.state
      this.claimSquare(this.getCell(), 'naught')
    }, 2000)
  }
  render() {
    return (
      <div>
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
                    padding: '10px',
                    height: '40px',
                    width: '30px'
                  }}>
                    {(token(cell.teamName))}
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
      <br/>
        <button onClick= {() =>this.resetBoard()}>Try Again</button>
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
