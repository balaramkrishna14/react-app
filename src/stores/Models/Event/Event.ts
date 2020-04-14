import {observable} from 'mobx';
//import {observer} from 'mobx-react';




class Event{
    @observable id: string
    @observable name: string
    @observable place: string
    
    constructor(eventName: string,eventLocation: string){
        
        this.id = Math.random().toString();
        this.name = eventName;
        this.place = eventLocation;
        
    }
    
   // onUpdateEventDetails = (eventName: string,eventLocation: string) => {
     //console.log(eventName,eventLocation);   
    //}
}

export default Event;
