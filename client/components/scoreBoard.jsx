import React from 'react'

export default function ScoreBoard(props) {
  return (
    <h3>Naughts: {props.naughtsScore} Crosses: {props.crossesScore} </h3>
  )
}
