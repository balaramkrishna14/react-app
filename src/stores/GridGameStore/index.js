import {observable,action} from 'mobx';

import Cell from '../Models/CellModel';

//const cell = new Cell();

class GameStore{
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    
    constructor(){
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
    }
    
    @action.bound
    onCellClick(){
        
    }
    
    @action.bound
    setGridCells(){
        
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        
    }
    
    @action.bound
    goToInitialLevelAndUpdateCells(){
        
    }
    
    @action.bound
    resetSelectedCellsCount(){
        
    }
    
    @action.bound
    incrementSelectedCellsCount(){
        
    }
    
    @action.bound
    onPlayAgainClick(){
        
    }
    
    @action.bound
    resetGame(){
        
    }
    
    @action.bound
    setTopLevel(){
        
    }
}

const gameStore = new GameStore();

export default gameStore;