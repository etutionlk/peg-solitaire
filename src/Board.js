import React, {Component} from 'react';
import GameSquare from "./GameSquare";
import BlankSquare from "./BlankSquare";

class Board extends Component {

    renderGameSquare(x,y) {
        const board = this.props.pegs
        const squareValue = board[x][y] ? "O":""
        // console.log(this.props.board.current)

        return (
            <GameSquare value={squareValue} onClick={() => this.props.onClick({x,y})}/>
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
                    {this.renderGameSquare(0,2)}
                    {this.renderGameSquare(0,3)}
                    {this.renderGameSquare(0,4)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>
                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(1,2)}
                    {this.renderGameSquare(1,3)}
                    {this.renderGameSquare(1,4)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>

                <div className="board-row">
                    {this.renderGameSquare(2,0)}
                    {this.renderGameSquare(2,1)}
                    {this.renderGameSquare(2,2)}
                    {this.renderGameSquare(2,3)}
                    {this.renderGameSquare(2,4)}
                    {this.renderGameSquare(2,5)}
                    {this.renderGameSquare(2,6)}
                </div>
                <div className="board-row">
                    {this.renderGameSquare(3,0)}
                    {this.renderGameSquare(3,1)}
                    {this.renderGameSquare(3,2)}
                    {this.renderGameSquare(3,3)}
                    {this.renderGameSquare(3,4)}
                    {this.renderGameSquare(3,5)}
                    {this.renderGameSquare(3,6)}
                </div>
                <div className="board-row">
                    {this.renderGameSquare(4,0)}
                    {this.renderGameSquare(4,1)}
                    {this.renderGameSquare(4,2)}
                    {this.renderGameSquare(4,3)}
                    {this.renderGameSquare(4,4)}
                    {this.renderGameSquare(4,5)}
                    {this.renderGameSquare(4,6)}
                </div>

                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(5,2)}
                    {this.renderGameSquare(5,3)}
                    {this.renderGameSquare(5,4)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>
                <div className="board-row">
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                    {this.renderGameSquare(6,2)}
                    {this.renderGameSquare(6,3)}
                    {this.renderGameSquare(6,4)}
                    {this.renderBlankSquare()}
                    {this.renderBlankSquare()}
                </div>
            </div>
        );
    }
}

export default Board;