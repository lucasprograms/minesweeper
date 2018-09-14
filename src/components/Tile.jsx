import React, { Component } from 'react'

export default class Tile extends Component {
  determineTileDisplay({ explored, bombed, flagged }, bombCount) {
    const FLAG_UNICODE = '\u2691'
    const BOMB_UNICODE = '\u26d4'

    if (explored && bombed) {
      return BOMB_UNICODE
    } else if (flagged) {
      return FLAG_UNICODE
    } else if (explored) {
      return bombCount ? bombCount : ''
    } else {
      return ''
    }
  }

  handleClick (isAltKey, updateGame, tile) {
    updateGame(tile, isAltKey)
  }
  
  render() {
    const tileDimension = this.props.tileWidth + 'px'
    const fontSize = this.props.tileWidth - 5 + 'px'
    return (
      <div
        className={`tile ${this.props.tile.explored ? 'revealed' : ''}`}
        style={{width: tileDimension, height: tileDimension, fontSize}}
        onClick={(e) => this.handleClick(e.altKey, this.props.updateGame, this.props.tile)}
      >
        {this.determineTileDisplay(this.props.tile, this.props.tile.adjacentBombCount())}
      </div>
    )
  }
}
