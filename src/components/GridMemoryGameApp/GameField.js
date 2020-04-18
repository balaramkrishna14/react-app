import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from 'mobx-react';
 
import Cell from './Cell.js';

const GameFieldDiv = styled.div`
    ${tw`flex justify-center flex-wrap m-8`}
    background-color: ${props => props.selectedTheme === 'dark' ? "#000" : 'whitesmoke'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
    width: ${props => props.gameLevelsData}px;
    height: ${props => props.gameLevelsData}px;
`;

@observer
class GameField extends React.Component{
    
    renderCells = (currentLevelGridCells) => {
        const {level,gameLevelsData,incrementSelectedCellsCount,resetGame} = this.props;
        return currentLevelGridCells.map((eachCell) => 
               <Cell incrementSelectedCellsCount = {incrementSelectedCellsCount} onCellClick = {this.onCellClick}
               resetGame = {resetGame} gameLevelsData = {gameLevelsData} key = {eachCell.id} eachCell = {eachCell}
               level = {level}/>);
    }
    
    render(){
        const {selectedTheme,currentLevelGridCells,level,gameLevelsData} = this.props;
           return(
           <GameFieldDiv gameLevelsData = {gameLevelsData[level].gridWidth} selectedTheme = {selectedTheme}>
           {this.renderCells(currentLevelGridCells)}
           </GameFieldDiv>
           ); 
    }
}

export default GameField;