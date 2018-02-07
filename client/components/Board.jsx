import React from 'react'

class Board extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
    grid: [
      ['x','o','o'],
      ['x','o','o'],
      ['x','o','o'],
    ]
    }
  }
  render () {
    return (
      <table style={{border: 'thin solid black'}}>
{this.state.grid && this.state.grid.map((row)=>{
    return (
      <tr style={{border: 'thin solid black'}}>
        {row.map((cell)=>{
          return <td style={{border: 'thin solid black', padding: '10px'}}>{cell}</td>
        })}
      </tr>
    )
})}
</table>
    )
  }
}
