import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import Board from "./Board";

// calling css
import './css/squares.css'
import './css/board.css'
import './css/index.css';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Game/>,
  document.getElementById('root')
);
