import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from 'mobx-react';

import gameStore from '../../stores/GridGameStore'

import Header from './Header.js';
import GameField from './GameField.js';
import GameResult from './GameResult.js';

const GridMemorySpace = styled.div`
    ${tw`border border-red-700`}
    background-color: ${props => props.selectedTheme === 'dark' ? "#000" : 'whitesmoke'};
    color: ${props => props.selectedTheme === 'dark' ? 'white' : 'black'};
`;

@observer
class GridMemoryGame extends React.Component{
    
    onHandleCellClick = () => {
        
    }
    
    getGridCells = () => {
        
    }
    
    goingToNextLevelAndUpdateCells = () => {
        
    }
    
    goingToInitialLevelAndUpdateCells = () => {
        
    }
    
    onResetSelectedCellsCount = () => {
        
    }
    
    onIncrementSelectedCellsCount = () => {
        
    }
    
    clickOnPlayAgain = () => {
        
    }
    
    onResetGame = () => {
        
    }
    
    onSetTopLevel = () => {
        
    }
    
    render(){
        const {selectedTheme,onChangeTheme,topLevel} = this.props;
        return(
            <GridMemorySpace selectedTheme={selectedTheme}>
                <Header selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>
                <GameField/>
                <GameResult topLevel={topLevel} selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>
            </GridMemorySpace>
            );
    }
}

export default GridMemoryGame;