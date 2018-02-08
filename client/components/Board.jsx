import React from 'react'
import Cell from './cell'
import userTeam from '../settings'



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
  render () {
    return (
      <div>
      <table style={{border: 'thin solid black'}}>
{this.state.grid && this.state.grid.map((row)=>{
    return (
      <tr style={{border: 'thin solid black'}}>
        {row.map((cell)=>{
          return <td style={{border: 'thin solid black', padding: '10px'}}><cell
            class= {this.props.teamName} row={this.props.row} col={this.props.col}
            onClick= {claimSquare(userTeam)}/>
          </td>
        })}
      </tr>
    )
})}
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
  return
}

var topLeft = {'none', 0, 0}
var topMid = {'none', 0, 1}
var topRight = {'none', 0, 2}
var midLeft = {'none', 1, 0}
var midMid = {'none', 1, 1}
var midRight = {'none', 1, 2}
var botLeft = {'none', 2, 0}
var botMid = {'none', 2, 1}
var botRight = {'none', 2, 2}

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

export default Board
