import Board from './Board'
import React, { Component } from 'react'
import * as Minesweeper from '../minesweeper'
import Modal from '../Modal'

export default class Game extends Component {
  constructor (props) {  
    super(props)  
    
    const board = new Minesweeper.Board(9, 10)
    this.state = {
      board: board,
      gameOutcome: 'undecided'
    }
  }

  updateGame (tile, isAltKey) {
    const board = this.state.board
    let gameOutcome = 'undecided'
    
    if (isAltKey) {
      tile.toggleFlag()
    } else {
      tile.explore()
    }

  
    if (board.won()) {
      gameOutcome = 'victory'
    } else if (board.lost()) {
      gameOutcome = 'loss'
    }

    this.setState({
      board: this.state.board,
      gameOutcome
    })
  }

  restartGame () {
    this.setState({
      board: new Minesweeper.Board(9, 10),
      gameOutcome: 'undecided'
    })
  }

  render() {
    return (
      <div className="game">
        <h3>MINESWEEPER, BABY</h3>
        <h5>alt + click to flag a square</h5>
        <Board
          board={this.state.board}
          updateGame={this.updateGame.bind(this)}
        />
        <Modal gameOutcome={this.state.gameOutcome} restartGame={this.restartGame.bind(this)}/>
      </div>
    )
  }
}
