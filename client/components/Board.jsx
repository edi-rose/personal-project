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
                return <td onClick={() => setState(claimSquare(cell, userTeam))} style={{
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
function claimSquare(cell, team){
  cell.teamName = team
  console.log(cell.teamName)
  return
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
