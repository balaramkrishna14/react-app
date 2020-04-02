/*import React from 'react';

function FormComponents(){
  return <h2>Welcome to FormComponents</h2>;
}

export {FormComponents};*/

import React from 'react';
import {Greetings} from './Greetings.js';

import {FavDessert} from './FavDessert.js';

import {VisitedCities} from './VisitedCities.js';

import {YourState} from './YourState.js';

import {DisableButton} from './DisableButton.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function FormComponents() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            
            <li>
              <Link to="Greetings">Greetings</Link>
            </li>
            
            <li>    
              <Link to="FavDessert">Favourite Dessert</Link>
            </li>
            
            <li>
              <Link to="VisitedCities">Visited Cities</Link>
            </li>
            
            <li>    
              <Link to="YourState">Your State</Link>
            </li>
         
            <li>    
              <Link to="DisableButton">Disable Button</Link>
            </li>
         
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
           
        
          
            renders the first one that matches the current URL. comments*/}
        <Switch>
          
          <Route path="/Greetings">
            <Greetings />
          </Route>
          
          <Route path="/FavDessert">
            <FavDessert />
          </Route>
          
          <Route path="/VisitedCities">
            <VisitedCities />
          </Route>
        
          <Route path="/YourState">
            <YourState />
          </Route>
        
          <Route path="/DisableButton">
            <DisableButton />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export {FormComponents};