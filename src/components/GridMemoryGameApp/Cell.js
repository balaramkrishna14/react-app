import React from 'react';
import {observable} from 'mobx';

class Cell extends React.Component{
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    
    constructor(){
        this.shouldShowHiddenCells = true;
        //this.isClickedOnCell = false;
    }
    
    componentDidMount = () => {
        
    }
    
    onCellClick = () => {
        
    }
    
}

export default Cell;