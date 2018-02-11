import React from 'react'
import {render} from 'react-dom'
import {Board} from './components/Board.jsx'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Board />,
    document.getElementById('board')
  )
})
