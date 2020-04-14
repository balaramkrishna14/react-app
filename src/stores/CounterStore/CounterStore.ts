import {observable,action,reaction} from 'mobx';

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
    onChangeCount(displayCount: string){
        if(isNaN(parseInt(displayCount))){
            this.count = 0;    
        }
        else{
            this.count=parseInt(displayCount);   
        }
    }
    
    showCount = reaction(() => {return this.count},(count) => {alert(count)},{delay:5000})
    
}

export default CounterStore;