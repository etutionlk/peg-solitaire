import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import Board from "./Board";

// calling css
import './css/squares.css'
import './css/board.css'
import './css/index.css';

class Game extends Component {
    constructor(props) {
        super(props);

        const pegs = [[false,false,true,true,true,false,false],
            [false,false,true,true,true,false,false],
            [true,true,true,true,true,true,true],
            [true,true,true,false,true,true,true],
            [true,true,true,true,true,true,true],
            [false,false,true,true,true,false,false],
            [false,false,true,true,true,false,false]]
        pegs[16] = false

        this.state = {
            pegs : pegs,
            board:[{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:2},{x:1,y:3},{x:1,y:4},{x:2,y:0},{x:2,y:1},{x:2,y:2},
                {x:2,y:3},{x:2,y:4},{x:2,y:5},{x:2,y:6},{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:3,y:4},
                {x:3,y:5},{x:3,y:6},{x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4},{x:4,y:5},{x:4,y:6},
                {x:5,y:2},{x:5,y:3},{x:5,y:4},{x:6,y:2},{x:6,y:3},{x:6,y:4}],
            previous:null,
            current:null,
            remove:1
        }
    }

    handleClick(i) {
        const isRemovalbleState = this.state.remove
        const currentBoard = this.state.pegs
        const prev = this.state.current
        const curr = i


        if (isRemovalbleState === 2) {
            const removablePeg = pegToRemove(curr,prev)

            if (removablePeg && (!currentBoard[i.x][i.y])) {
                currentBoard[i.x][i.y] = true
                currentBoard[prev.x][prev.y] = false
                currentBoard[removablePeg.x][removablePeg.y] = false
            }
        }
        console.log(prev)
        console.log(i)

        this.setState({
            pegs: currentBoard,
            board:this.state.board,
            current:i,
            previous:curr,
            remove: this.state.remove === 2 ?1:this.state.remove+1,
            // elementToRemove:this.state.remove === 2 ?pegToRemove(this.state.current,this.state.previous):null
        },()=>{
            // this.setState({elementToRemove:this.state.remove === 2 ?pegToRemove(this.state.current,this.state.previous):null,})

            // console.log(this.state)
            // console.log(this.state.previous)
            // console.log(this.state.moves)
        })
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board board={this.state} pegs={this.state.pegs} onClick={(i) =>this.handleClick(i)} />
                </div>
            </div>
        );
    }
}

function pegToRemove (current,previous) {

    if (!current || !previous) {
        return null
    }
    if (current.x === previous.x) {
        //horizontal
        if (current.y > previous.y) {
            return {x:current.x,y:previous.y+1}
        }else {
            return{x:current.x,y:current.y+1}
        }
    }else if (current.y === previous.y) {
        //vertical
        if (current.x < previous.x) {
            return {x:current.x+1,y:current.y}
        }else {
            return {x:previous.x+1,y:current.y}
        }
    }else {
        return null
    }
}

ReactDOM.render(
    <Game/>,
  document.getElementById('root')
);
