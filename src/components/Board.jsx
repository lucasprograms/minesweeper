import React, { Component } from 'react'
import Tile from './Tile'

export default class Board extends Component {
  render() {
    const grid = this.props.board.grid
    const TILE_WIDTH = 40

    return (
      <div className="board" style={{width: (grid.length * (TILE_WIDTH + 1) + 'px')}}>
        {this.props.board.grid.map((row, idx0) => {
          return (<div key={idx0} className="board-row clearfix">
            {row.map((el, idx1) => {
              return <Tile key={idx1} tile={el} updateGame={this.props.updateGame} tileWidth={TILE_WIDTH}/>
            })}
          </div>)
        })}
      </div>
    )
  }
}
