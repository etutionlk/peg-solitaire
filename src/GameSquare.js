import React from 'react';

function GameSquare(props){
        return (
                <button className="square">{props.value}</button>
        );
}

export default GameSquare;