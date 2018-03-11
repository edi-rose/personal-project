import React from 'react'

export default function Buttons(props){
  return (
  <div className="buttons">
    <button onClick= {() =>props.resetBoard()}>Try Again</button>
    <button onClick={() => props.changeTeam()}>Change Teams</button>
  </div>
)
}
