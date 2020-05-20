import React from 'react';
//import {observer} from 'mobx-react';
import {observable} from 'mobx';
//import withToggle from '../../hoc/withToggle';


//@observer
class ViewEditToggle extends React.Component{
    @observable displayText
    @observable buttonText
    consturctor(){
        this.displayText = "Click on the edit button to start editing";
    }
    
    onHandleText = (event) => {
        this.displayText = event.target.value; 
    }
    
    onHandleButton = () => {
        const {onToggle} = this.props;
        if(onToggle){
            this.buttonText = "Cancel";
        } else{
            this.buttonText = "Edit";
        }   
    }    
    
    render(){
        return(
            <div>
                <h2>ViewEditToggle</h2>
                <input onChange={this.onHandleText} value={this.displayText} type="text" />
                <button onClick={this.onHandleButton}>{this.buttonText}</button>
            </div>
        );
    }
}

export {ViewEditToggle};