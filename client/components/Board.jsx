import React from 'react'
var userTeam = require('../settings').userTeam
var token = require('../settings').token
var turns = require('../../Bots/botMovesReact.js')
var getCell = require('../settings').getCell
var sayHello = require('../sayHello')
var board = require('../boardArray')
var turnCount = 1
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
  }
  getCell(count){
    if (count == 1) {
      turnCount ++
      return turns.turnOneNaught()
    }
    else if (count == 2) {
      count ++
      return turns.turnTwoNaught()
    }
    else {
      console.log('count too high')
    }
  }
  claimSquare(cell, team){
    const {grid} = this.state
    let found
    grid.forEach(row => row.forEach(c => {
      if (c == cell) found = cell
    }))
    console.log(found)
    found.teamName = team
    console.log(found)
    this.setState({grid, userPaused: !this.state.userPaused})
  }
  userClick(cell) {
    if (this.state.userPaused) return
    this.claimSquare(cell, userTeam)
    setTimeout(() => {
      console.log("bot moves")
      var {grid} = this.state
      this.claimSquare(this.getCell(turnCount), 'naught')
    }, 2000)
    console.log('move over')
  }
  render() {
    console.log(this.state.grid);
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
