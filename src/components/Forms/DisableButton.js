import React from 'react';

class DisableButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isDisableButtonChecked:false,
          showMessage:''
        };
    }
    
    handleChange = (event) => {
        if(event.target.checked){
            this.setState({
                showMessage:`I am Disabled`
            });
        }
        else{
            this.setState({
                showMessage:null
            });
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            showMessage:`Hi I am Enabled`
        });
    }
    
   // displayMessage = () => {
        
    //}
    
    render(){
        return(
            <div>
            <h2>Welcome to DisableButton</h2>
            <input type="checkbox" onChange={this.handleChange} value="Disabled"/>
            <button type="submit" onClick={this.handleSubmit}>Click Me</button>
            <h3>{this.state.showMessage}</h3>
            </div>
            );
    }
}

export {DisableButton};