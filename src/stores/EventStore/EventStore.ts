import {action,observable} from 'mobx';
import Event from '../Models/Event/Event';

class EventStore{
    @observable events: any[] 
    constructor(){
        this.events = [];
    }
    
    onAddEvent(eventName: any,eventLocation: any){
        this.events.push(new Event(eventName,eventLocation));
        console.log(this.events);
    }
    @action.bound
    onDeleteEvent(event: { target: { id: any; }; }){
        console.log(event);
        let deleteEvent = this.events.findIndex(findEvent => findEvent.id === event.target.id);
        console.log(deleteEvent);
        //delete this.events[deleteEvent];
    }
    
    //@computed
   // noOfEvents = () => {
        
    //}
}

const eventStore = new EventStore();

export default eventStore;