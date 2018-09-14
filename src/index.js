import React from 'react';
import ReactDOM from 'react-dom'
import Game from './components/Game'
import './App.css'

function renderReactDom () {
  ReactDOM.render(<Game />, document.getElementById('root'))
}

document.addEventListener('DOMContentLoaded', renderReactDom)
