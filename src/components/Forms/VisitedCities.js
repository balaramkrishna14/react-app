import React from 'react';

class VisitedCities extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          updatedArray:[],
          showMessage:'',
          cities:['Hyderabad','Chennai','Bangalore','Pune','Mumbai','Delhi']
        };
    }
    
    handleCheckboxClick = (event) => {
        
    }
    
    handleSubmit = () => {
        
    }
    
    displayVisitedCitiesMessage = () => {
        
    }
    
    renderCityOptions = () => {
       /* let item=this.state.cities.map((item)=>{
            return(
                <div>
                <input type="checkbox" name={item} onChange={this.handleCheckboxClick} value={item} />
                </div>
                );
        });  */     
    }
    
    render(){ 
        
  return(
      <div>
       <h2>Welcome to VisitedCities</h2>
       {this.renderCityOptions()}
       <button type="submit" onClick={this.handleSubmit}>Make Your City</button>
       <h1>{this.state.showMessage}</h1>
       </div>
  );
}
}

export {VisitedCities};