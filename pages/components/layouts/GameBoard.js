import React from "react";
import styled from 'styled-components';
import {Box} from '@material-ui/core';


const Board = styled(Box)`
     ;
    
    ;
    ;
     ;
`;

const GameBoard = () => {
    // const _boardHeight = document.innerHeight;
    return (
        <div style={{
                        
                        height : 625,
                        width : 400,
                        margin : 0 ,
                        backgroundImage : "url('/assets/images/board/game_board.png')",
                        backgroundSize : 'cover',
                        backgroundRepeat : "no-repeat" }}>
        </div>

    );
}

export default GameBoard;