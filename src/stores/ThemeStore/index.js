import {observable,action} from 'mobx';
//import {observable} from 'mobx';

class ThemeStore{
    @observable selectedTheme
    
    constructor(){
        this.selectedTheme="light";
        
    }
    
    //@action.bound -->for object destructuring method while using this method in any assignment
    @action.bound
    setCurrentTheme(){
        if(this.selectedTheme === "light"){
            this.selectedTheme="dark";
        }
        else{
            this.selectedTheme = "light";
        }
    }
    
    
}

const themeStore = new ThemeStore();
export default themeStore;