import React from 'react';
import {observer} from 'mobx-react';

import AddEvent from './AddEvent.js';
import eventStore from '../../stores/EventStore/EventStore.js';
//import EventInstance from '../../stores/Models/Event/Event.js';

@observer
class EventsApp extends React.Component{
    
    onAddEvent = (eventName,eventLocation) => {
        //console.log(eventName,eventLocation);
        eventStore.onAddEvent(eventName,eventLocation);
    }

    onListEvent = () => {
        return eventStore.events.map((eachEvent) => 
            <div key={eachEvent.id}>
                <p>{eachEvent.name}</p>
                <p>{eachEvent.place}</p>
                <button id={eachEvent.id} onClick = {eventStore.onDeleteEvent} >Delete Event</button>
            </div>
        );
    }
    
    

    render(){
        return(
            <div>
                <AddEvent onAddEvent={this.onAddEvent}/>
                {this.onListEvent()}
            </div>
            );
    }
}

export default EventsApp;

//return countries.map((eachCountry) => 
    //    <CountryCard countries={countries} countryDetail={eachCountry} key={eachCountry.name} selectedTheme={selectedTheme}/>);
    