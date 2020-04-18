import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DisplayingEachCell = styled.button`
    ${tw`bg-blue-700`};
    background-color: ${props => (props.shouldShowHiddenCells || props.isClickedOnCell)
    && (props.isHidden) ? '#38a169' : (!props.isHidden && props.isClickedOnCell) ? 'red' : '#4a5568'};
    width: ${props => props.eachCellWidth}px;
    height: ${props => props.eachCellWidth}px;
    margin: 3px;
`;

@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    
    constructor(){
        super();
        this.shouldShowHiddenCells = true;
        this.isClickedOnCell = false;
        this.timeCount;
        this.totalTimeCount;
    }
    
    componentDidMount = () => {
       const {level,gameLevelsData,resetGame} = this.props;
       this.timeCount = setTimeout(() => {
            this.shouldShowHiddenCells = false;
            clearTimeout(this.timeCount);
        },
        gameLevelsData[level].hiddenCellCount * 1000);
        
        this.totalTimeCount = setTimeout(() => {
              resetGame();
              clearTimeout(this.totalTimeCount);
        },
        gameLevelsData[level].hiddenCellCount * 3000);
    }
    
    componentWillUnmount = () => {
        clearTimeout(this.timeCount);
        clearTimeout(this.totalTimeCount);
    }
    
    onCellClick = () => {
        const {incrementSelectedCellsCount,resetGame} = this.props;
        const {eachCell} =this.props;
        if(eachCell.isHidden && !this.isClickedOnCell){
            this.isClickedOnCell = true;
            incrementSelectedCellsCount();
        }else if(!eachCell.isHidden){
            const timeCount = setTimeout(() => {
                resetGame();
                clearTimeout(timeCount);
            },100);
            this.isClickedOnCell = true;
        }
    }
    
    render(){
        const {eachCell,gameLevelsData,level} =this.props;
        const eachCellWidth = (gameLevelsData[level].gridWidth / gameLevelsData[level].gridSize) - 6;
        return(
            <DisplayingEachCell disabled = {this.shouldShowHiddenCells} isClickedOnCell = {this.isClickedOnCell}
            eachCellWidth = {eachCellWidth} onClick = {this.onCellClick} isHidden = {eachCell.isHidden} 
            shouldShowHiddenCells = {this.shouldShowHiddenCells} />
            );
    }
}

export default Cell;