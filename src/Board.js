import React, {Component} from 'react';
import GameSquare from "./GameSquare";
import BlankSquare from "./BlankSquare";

class Board extends Component {

    renderGameSquare(i) {
        return (
            <GameSquare />
        );
    }

    renderBlankSquare (i) {
        return(
            <BlankSquare />
        );
    }
    render() {
        return (
            <div>

                <div className="board-row">
                    {this.renderBlankSquare(0)}
                    {this.renderBlankSquare(1)}
                    {this.renderGameSquare(2)}
                    {this.renderGameSquare(3)}
                    {this.renderGameSquare(4)}
                    {this.renderBlankSquare(5)}
                    {this.renderBlankSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderBlankSquare(7)}
                    {this.renderBlankSquare(8)}
                    {this.renderGameSquare(9)}
                    {this.renderGameSquare(10)}
                    {this.renderGameSquare(11)}
                    {this.renderBlankSquare(12)}
                    {this.renderBlankSquare(13)}
                </div>

                <div className="board-row">
                    {this.renderGameSquare(14)}
                    {this.renderGameSquare(15)}
                    {this.renderGameSquare(16)}
                    {this.renderGameSquare(17)}
                    {this.renderGameSquare(18)}
                    {this.renderGameSquare(19)}
                    {this.renderGameSquare(20)}
                </div>
                <div className="board-row">
                    {this.renderGameSquare(21)}
                    {this.renderGameSquare(22)}
                    {this.renderGameSquare(23)}
                    {this.renderGameSquare(24)}
                    {this.renderGameSquare(25)}
                    {this.renderGameSquare(25)}
                    {this.renderGameSquare(27)}
                </div>
                <div className="board-row">
                    {this.renderGameSquare(28)}
                    {this.renderGameSquare(29)}
                    {this.renderGameSquare(30)}
                    {this.renderGameSquare(31)}
                    {this.renderGameSquare(32)}
                    {this.renderGameSquare(33)}
                    {this.renderGameSquare(34)}
                </div>

                <div className="board-row">
                    {this.renderBlankSquare(35)}
                    {this.renderBlankSquare(35)}
                    {this.renderGameSquare(37)}
                    {this.renderGameSquare(38)}
                    {this.renderGameSquare(39)}
                    {this.renderBlankSquare(40)}
                    {this.renderBlankSquare(41)}
                </div>
                <div className="board-row">
                    {this.renderBlankSquare(42)}
                    {this.renderBlankSquare(43)}
                    {this.renderGameSquare(44)}
                    {this.renderGameSquare(45)}
                    {this.renderGameSquare(46)}
                    {this.renderBlankSquare(47)}
                    {this.renderBlankSquare(48)}
                </div>
            </div>
        );
    }
}

export default Board;