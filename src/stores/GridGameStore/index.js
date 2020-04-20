import {observable,action} from 'mobx';

import gameLevelsData from '../../components/GridMemoryGameApp/GridCellWidth.js';

import CellModel from '../Models/CellModel';         

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
        this.setGridCells();
    }
    
    @action.bound
    setGridCells(){
       let newArray = [];
       let creatingCellCount = gameLevelsData[this.level].gridSize ** 2;
       for(let i = 1; i <= creatingCellCount; i++){
           if(i <= gameLevelsData[this.level].gridSize){
               const eachCellObject = new CellModel(Math.random(), true);
               newArray.push(eachCellObject);
           }else{
               const eachCellObject = new CellModel(Math.random(), false);
                newArray.push(eachCellObject);
           } 
       }
       this.currentLevelGridCells = newArray.sort(() => Math.random() - 0.5);
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        if(this.selectedCellsCount === gameLevelsData[this.level].gridSize){
            this.level++;
            this.resetSelectedCellsCount();
            this.setGridCells();
        }
            
    }
    
    @action.bound
    goToInitialLevelAndUpdateCells(){
        this.resetSelectedCellsCount();
        this.currentLevelGridCells = [];
        this.setGridCells();
    }
    
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount = 0;
    }
    
    @action.bound
    incrementSelectedCellsCount(){
        this.selectedCellsCount++;
        this.goToNextLevelAndUpdateCells();
    }
    
    @action.bound
    onPlayAgainClick(){
       this.setTopLevel();
       this.level = 0; 
       this.goToInitialLevelAndUpdateCells();
       this.resetGame();
    }
    
    @action.bound
    resetGame(){
        this.setTopLevel();
        this.level = 0;
        this.goToInitialLevelAndUpdateCells();
    }
    
    @action.bound
    setTopLevel(){
       if(this.topLevel < this.level){
           this.topLevel = this.level;
       }    
    }
}

const gameStore = new GameStore();

export default gameStore;