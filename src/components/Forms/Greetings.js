import React from 'react';

class Greetings extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          userInputText:'', 
          displayName:'',
          count:0,
          parentCounter:0
        };
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.userInputText === ""){
            alert('Please enter your Name');
        }
        else{
           this.setState({
               displayName:`Hello ${this.state.userInputText}, have a nice day!`,
               userInputText:''
           });
       }
    }
    
    handleUserInput = (event) => {
        this.setState({
            userInputText:event.target.value
        });
    }
    
    /*onInc = () => {
        /*this.setState({count:this.state.count + 1});
        console.log('First Log',this.state.count);
        this.setState({count:this.state.count + 1});
        console.log('second Log',this.state.count);
        this.setState({count:this.state.count + 1});
        console.log('Third Log',this.state.count);//comment end here
       
        this.setState(prevState => ({
            count:prevState.count+1
        }));
        console.log('Log',this.state.count);
        this.setState(prevState => ({
            count:prevState.count+1
        }));
        console.log('Log',this.state.count);
        this.setState(prevState => ({
            count:prevState.count+1
        }));
        console.log('Log',this.state.count);
    };*/
    
    /*Object.assign(state,
        count: state.count + 1,
        count: state.count + 1,
        count: state.count + 1
    );
    console.log(state)*/
    
    
    
    render(){
      return(
          <div>
          <button onClick={this.onInc}>click me</button>
          <button onClick={this.onIncreament}>click me</button>
          <h2>Welcome to Greetings</h2>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.userInputText} type="text" placeholder="Enter the name" onChange={this.handleUserInput}/>
              <button>Greet</button>
            </form>
            <h1>{this.state.displayName}</h1>
            
          </div>    
          ); 
    }
}
//<h1>Hello {this.state.userOutput}, have a nice day!</h1>
export {Greetings};

