import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true
    }
  }

  getModalContent (outcome) {
    if (outcome === 'victory') {
      return 'SWEET VICTORY!'
    } else {
      return 'maybe next time, Mike \u2603'
    }
  }

  render() {
    return (
      <div className={`modal ${this.props.gameOutcome === 'undecided' ? 'hide' : 'show'}`}>
        <div className="modal-content">
          <button onClick={this.props.restartGame} id="play-again" className="modal-play-again-button">Play Again</button>
          <div className="modal-content-text">{this.getModalContent(this.props.gameOutcome)}</div>
        </div>
      </div>
    )
  }
}
