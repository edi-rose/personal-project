import React from 'react'
import Cell from './cell'

class Board extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
    grid: [
      [' ',' ',' '],
      [' ',' ',' '],
      [' ',' ',' '],
    ]
    }
  }
  render () {
    return (
      <div>
      <table style={{border: 'thin solid black'}}>
{this.state.grid && this.state.grid.map((row)=>{
    return (
      <tr style={{border: 'thin solid black'}}>
        {row.map((Cell)=>{
          return <td style={{border: 'thin solid black', padding: '10px'}}>{Cell}</td>
        })}
      </tr>
    )
})}
</table>
</div>
    )
  }
}

export default Board
