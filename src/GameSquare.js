import React from 'react';

function GameSquare(props){
        return (
                <button className="square" onClick={props.onClick}>{props.value}</button>
        );
}

export default GameSquare;