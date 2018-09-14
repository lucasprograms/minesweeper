import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true,
      showSizeButtons: false
    }
  }

  getModalContent (outcome) {
    if (outcome === 'victory') {
      return 'SWEET VICTORY!'
    } else {
      return 'maybe next time, Mike \u2603'
    }
  }

  handlePlayAgainClick () {
    this.setState({
      showSizeButtons: true
    })
  }

  handleSizeButtonClick (restartGame, size) {
    this.setState({
      showSizeButtons: false
    })
  
    restartGame(size)
  }

  render() {
    return (
      <div className={`modal ${this.props.gameOutcome === 'undecided' ? 'hide' : 'show'}`}>
        <div className="modal-content">
          <button 
            onClick={this.handlePlayAgainClick.bind(this)}
            className={`modal-play-again-button ${this.state.showSizeButtons ? 'hide' : 'show'}`}>
            Play Again
          </button>
          <div className={`clearfix modal-size-buttons ${this.state.showSizeButtons ? 'show' : 'hide'}`}>
            <h4>Board Size:</h4>
            <div>
              <button className="modal-size-button" onClick={() => this.handleSizeButtonClick(this.props.restartGame, 'small')}>Small</button>
              <button className="modal-size-button" onClick={() => this.handleSizeButtonClick(this.props.restartGame, 'medium')}>Medium</button>
              <button className="modal-size-button" onClick={() => this.handleSizeButtonClick(this.props.restartGame, 'large')}>Large</button>
            </div>
          </div>
          <div className="modal-content-text">{this.getModalContent(this.props.gameOutcome)}</div>
        </div>
      </div>
    )
  }
}
