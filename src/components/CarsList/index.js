/*import React from 'react';
class CarsList extends React.Component{
    render(){
        return <div>CarsList Component</div>;
    }
}
export {CarsList};*/
//export default CarsList;


import React from 'react';


function AddCarButton(props){
    return(
         <div className="add-car-div">
          <button onClick={props.addCar} className="add-car" id="addCar">Add Car</button>
         </div>
         );
}

class Car extends React.Component{

    constructor(props){
        super(props);
        this.state={
            status:'STOPPED',
            speed:0
        };
        //this.startStop=this.startStop.bind(this);
        //this.accelerate=this.accelerate.bind(this);
        //this.applyBreak=this.applyBreak.bind(this);
    }
        
        startStop=()=>{
            this.setState(
            {speed:0});
            if(this.state.status === "STOPPED")
              this.setState({status:"RUNNING"});
            else
              this.setState({status:"STOPPED"});
        }
        
        applyBreak=()=>{
            if(this.state.speed>0){
                this.setState({ speed:this.state.speed - 10 });
            }
        }
        
        accelerate=()=>{
                this.setState({ speed:this.state.speed + 10 });
        }
        
        displayStatusText(){
            if(this.state.status==="STOPPED"){
                return (<p className="start-stop-status">Status:<span id="carStatus">STOPPED</span></p>);
            }
            
            if(this.state.speed===0){    
                return (<p className="start-stop-status">Status:<span id="carStatus">RUNNING</span></p>);
            }
            return (<p className="Status-in-speed">
            Status:<span id="carStatus">RUNNING with {this.state.speed} KMPH</span></p>);
        }
        
        render(){
            let startStop = (this.state.status === "STOPPED") ?
                <button onClick={this.startStop} className="start" id="isStart">Start</button>:
                <button onClick={this.startStop} className="stop" id="isStart">Stop</button>;
            return(
                <div className="car-app">
                    <div  className="car-running-status" id="carRunningStatus">
                        <div  className="car-row-1">
                            <div>Car:{this.props.carId}</div>
                            <div onClick={()=>this.props.removeCarFromCarsList(this.props.carId)} className="close-button">X</div> 
                        </div>
                        <div className="car-row-2">
                        {startStop}
                        {this.displayStatusText()}
                            <div className="controlling-speed">
                                <button onClick={this.accelerate} disabled={this.state.status==="STOPPED"} 
                                className="accelerate-button" id="accelerate">Accelerate</button>
                                
                                <button onClick={this.applyBreak} disabled={this.state.status <= 0} 
                                className="decelerate-button" id="decelerate">Apply Break</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
        }
}


//ReactDOM.render(<Car />,document.getElementById('root'));

class CarsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            carList:[1],
        };
    }
    
    addCarToCarsList=()=>{
        let updatedList=this.state.carList;
        let carId=(updatedList.length > 0 ) ? updatedList[updatedList.length - 1] + 1: 1;
        updatedList.push(carId);
        this.setState({ carList: updatedList });
    }
    
    removeCarFromCarsList=(carId)=>{
        let updatedList = this.state.carList;
        let index = updatedList.indexOf(carId);
        updatedList.splice(index,1);
        this.setState({carList:updatedList});
    }
    
    renderCarsList=()=>{
        return this.state.carList.map(id => 
        <Car key={id.toString()} carId={id} removeCarFromCarsList={this.removeCarFromCarsList} />);
    }
    
    render(){
        return(
        <div>
          <AddCarButton addCar={this.addCarToCarsList}/>
          {this.renderCarsList()}
        </div>
    )}
    
}

//ReactDOM.render(<CarsList />,document.getElementById('root'));
export {CarsList};


