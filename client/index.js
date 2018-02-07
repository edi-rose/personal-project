import React from 'react'
var ReactDOM = require('react-dom')
import Board from './components/Board'

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
    <Board />,
    document.getElementById('board')
  )
})
