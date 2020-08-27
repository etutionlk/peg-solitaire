import React, {Component} from 'react';
import GameSquare from "./GameSquare";
import BlankSquare from "./BlankSquare";

class Board extends Component {

    renderGameSquare(i) {
        var squareValue = 'O'
        if (i==16) {
            squareValue = ''
        }
        return (
            <GameSquare value={squareValue} />
        );
    }

    renderBlankSquare () {
        return(
            <BlankSquare />
        );
    }
    render() {
        return (
            <div>

                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(0)}
                    {this.renderGameSquare(1)}
                    {this.renderGameSquare(2)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>
                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(3)}
                    {this.renderGameSquare(4)}
                    {this.renderGameSquare(5)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>

                <div className="board-row">
                    {this.renderGameSquare(6)}
                    {this.renderGameSquare(7)}
                    {this.renderGameSquare(8)}
                    {this.renderGameSquare(9)}
                    {this.renderGameSquare(10)}
                    {this.renderGameSquare(11)}
                    {this.renderGameSquare(12)}
                </div>
                <div className="board-row">
                    {this.renderGameSquare(13)}
                    {this.renderGameSquare(14)}
                    {this.renderGameSquare(15)}
                    {this.renderGameSquare(16)}
                    {this.renderGameSquare(17)}
                    {this.renderGameSquare(18)}
                    {this.renderGameSquare(19)}
                </div>
                <div className="board-row">
                    {this.renderGameSquare(20)}
                    {this.renderGameSquare(21)}
                    {this.renderGameSquare(22)}
                    {this.renderGameSquare(23)}
                    {this.renderGameSquare(24)}
                    {this.renderGameSquare(25)}
                    {this.renderGameSquare(26)}
                </div>

                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(27)}
                    {this.renderGameSquare(28)}
                    {this.renderGameSquare(29)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>
                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(30)}
                    {this.renderGameSquare(31)}
                    {this.renderGameSquare(32)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>
            </div>
        );
    }
}

export default Board;