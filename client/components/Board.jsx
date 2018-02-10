import React from 'react'
var userTeam = require('../settings').userTeam
var token = require('../settings').token

class Board extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [topLeft,topMid,topRight],
        [midLeft,midMid,midRight],
        [botLeft,botMid,botRight],
      ]
    }
    this.userClick = this.userClick.bind(this)
  }
  claimSquare(cell, team){
    console.log("hello")
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
      const {grid} = this.state
      let found
      while(!found) {
        let randomRow = Math.floor(Math.random() * 3)
        let randomCell = Math.floor(Math.random() * 3)
        if (grid[randomRow][randomCell].teamName == 'none') found == grid[randomRow][randomCell]
      }
      this.claimSquare(found, "naught")
    }, 3000)
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

var topLeft = {teamName:'none', row:0, col:0}
var topMid = {teamName:'none', row:0, col:1}
var topRight = {teamName:'none', row:0, col:2}
var midLeft = {teamName:'none', row:1, col:0}
var midMid = {teamName:'none', row:1, col:1}
var midRight = {teamName:'none', row:1, col:2}
var botLeft = {teamName:'none', row:2, col:0}
var botMid = {teamName:'none', row:2, col:1}
var botRight = {teamName:'none', row:2, col:2}

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

export default Board
