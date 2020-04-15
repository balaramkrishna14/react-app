import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Cell from './Cell.js';

const GameFieldDiv = styled.div`
    ${tw`text-center`}
`;

class GameField extends React.Component{
    
    onCellClick = () => {
        
    }
    
    render(){
        const {onCellClick} = this;
        //props --> cells[],onCellClick(),level:0
       return(
           <GameFieldDiv>
           <button onCellClick={onCellClick}>1234</button>
           </GameFieldDiv>
           ); 
    }
}

export default GameField;