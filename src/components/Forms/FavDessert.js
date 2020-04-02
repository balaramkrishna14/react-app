import React from 'react';

class FavDessert extends React.Component{
    constructor(props){
        super(props);
        this.state={
        userInputText:'',
        displayMessage:'',
        dessertList:['Vanilla','Butterscotch','Gulab Jamum','Yoghurt Pots','Baked Banana','Chocolate']    
        };
    }
    
    handleUserInput = (event) => {
        
        this.setState({
            userInputText:event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
           this.setState({
               displayMessage:`My Favourite is ${this.state.userInputText}`
           });
    }
    
    renderDessertOptions = () => {
                let list = this.state.dessertList.map((item,i) => {
                    return <div key={i}>
                    <input type="radio" id={i} value={item} name="item" onChange={this.handleUserInput} />
                    <label>{item}</label>
                    </div>;
                });
                return list;
    }
    
    render(){
        return(
            <div>
            <h2>What is your Favourite Dessert ?</h2>
            {this.renderDessertOptions()}
                <input value="Make Your Choice" onClick={this.handleSubmit} type="submit"/>
                <h3>{this.state.displayMessage}</h3>
            </div>
           );
    }
}

export {FavDessert};

