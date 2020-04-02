import React from 'react';

class YourState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          stateList:['Andhra Pradesh','Telangana','Tamil Nadu','Kerala','Karnataka','Haryana'],
          selectedState:'',
          updatedState:''
        };
    }
    
    handleChangeState = (event) => {
        this.setState({
            selectedState:event.target.value
        })
    }
    
    handleSubmit = () => {
        if(this.state.selectedState!==''){
            this.setState({
                updatedState:`I am form ${this.state.selectedState} state`
            });
        }
        else{
            this.setState({
                updatedState:null
            });
        }
    }
    
   // displayMessage = () => {
        
    //}
    
    
    render(){
      return (
          <div>
          <h2>Welcome to YourState</h2>;
          <select onChange={this.handleChangeState}>
          {this.state.stateList.map((item,index)=>{
              return(
              <option key={index} value={item}>{item}</option>
              );
          })}
          </select>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          <h1>{this.state.updatedState}</h1>
          </div>
          );
    }
}

export {YourState};


/*class SetstateIsAsync extends React.Component{
    state={
        count:0
    }
    onInc = () => {
        this.setState(prevState => ({
            count:prevState.count+1
        }));
        console.log('Log',this.state.count);
    }
    render(){
        return(
            <h1>Welcome to YourState</h1>
            )
    }
}

export {SetstateIsAsync};*/