import {observable,action} from 'mobx';

class CounterStore{
   // const appState = @observable({
        @observable count=0
    //})    
    @action.bound
    onIncrementCount(){
        this.count++;
    }
    
    @action.bound
    onDecrementCount(){
        this.count--;
    }
    
    @action.bound
    onChangeCount(displayCount){
        if(isNaN(parseInt(displayCount))){
            this.count = 0;    
        }
        else{
            this.count=parseInt(displayCount);   
        }
    }
}

export default CounterStore;