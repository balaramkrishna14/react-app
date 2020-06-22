import {observable} from 'mobx';
//import {observer} from 'mobx-react';

class Event{
    @observable id
    @observable name
    @observable place
    
    constructor(eventName,eventLocation){
        
        this.id = Math.random().toString();
        this.name = eventName;
        this.place = eventLocation;
        
    }
    
    onUpdateEventDetails = (eventName,eventLocation) => {
     //console.log(eventName,eventLocation);   
    }
}

export default Event;
