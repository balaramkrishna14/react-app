import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
//import tw from 'tailwind.macro';
//import EventStore from '../../stores/EventStore/EventStore.js';

@observer
class AddEvent extends React.Component{
    @observable eventName
    @observable eventLocation
    
    @action.bound
    onChangeEventName(event){
        this.eventName = event.target.value;
        //console.log(this.eventName);
    }
    
    @action.bound
    onChangeEventLocation(event){
        this.eventLocation = event.target.value;
        
    }
    
    @action.bound
    onAddEvent(){
        this.props.onAddEvent(this.eventName,this.eventLocation);
        this.eventName="";
        this.eventLocation="";
        
        //event.target.value=""
        //console.log(this.eventName);
    }
    
    render(){
        return(
            <div className="flex">
                <div className="flex flex-col" >
                    <input value={this.eventName} className="m-2" onChange={this.onChangeEventName} placeholder="Event name" type="text"/>
                    <input value={this.eventLocation} className="m-2" onChange={this.onChangeEventLocation} placeholder="Event Location" type="text"/>
                </div>
                <button onClick={this.onAddEvent}>Add Event</button>
            </div>
            );
    }
}

export default AddEvent;