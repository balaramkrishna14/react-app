import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from 'mobx-react';

import gameStore from '../../stores/GridGameStore';
import Header from './Header.js';
import GameField from './GameField.js';
import GameResult from './GameResult.js';
import gameLevelsData from './GridCellWidth.js';

const GridMemorySpace = styled.div`
    ${tw`h-screen flex flex-col justify-center items-center`}
    background-color: ${props => props.selectedTheme === 'dark' ? "#000" : 'whitesmoke'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

@observer
class GridMemoryGame extends React.Component{
    
    render(){
        const {selectedTheme,onChangeTheme} = this.props;
        return(
            <GridMemorySpace selectedTheme={selectedTheme}>
                
                <Header level = {gameStore.level} gameLevelsData = {gameLevelsData} topLevel = {gameStore.topLevel} 
                selectedTheme = {selectedTheme} onChangeTheme = {onChangeTheme} />
                
                {(gameStore.level === gameLevelsData.length - 6) ?
                <GameResult onPlayAgainClick = {gameStore.onPlayAgainClick} level = {gameStore.level} 
                selectedTheme = {selectedTheme} onChangeTheme = {onChangeTheme} /> :
                <GameField resetGame = {gameStore.resetGame} incrementSelectedCellsCount = {gameStore.incrementSelectedCellsCount} 
                selectedTheme={selectedTheme} gameLevelsData = {gameLevelsData} level = {gameStore.level}
                currentLevelGridCells = {gameStore.currentLevelGridCells} 
                onHandleCellClick = {this.onHandleCellClick} />
                }
            </GridMemorySpace>
            );
    }
}
export default GridMemoryGame;