import React from 'react';
import {Link} from "react-router-dom";

import {E_COMMERCE_SIGN_IN_PATH} from "../../authentication/constants/routeConstants/routeConstants";
export default class Home extends React.Component{
  
    /*gotoGridScreenIfLoggedIn = () => {
      return (
        <Redirect
          to = {{
            pathname : '/Grid-Memory-Game',
          }}
        />
        );
    }*/
    
  
    render(){
      /*if(true){
        return this.gotoGridScreenIfLoggedIn();
      }*/
        return(
     <nav>
          <ul>
            <li>
              <Link to="Home">Home</Link>
            </li>
            
            <li>
              <Link to="CarsList">CarsList</Link>
            </li>
            
            <li>    
              <Link to="TodoApp">TodoList</Link>
            </li>
            
            <li>
              <Link to="FormComponents">Form Component</Link>
            </li>
            
            <li>
              <Link to="CountriesDashBoardApp">Countries DashBoardApp</Link>
            </li>
            
            <li>
              <Link to="EmojiGame">Emoji Game App</Link>
            </li>
            
            <li>
              <Link to="counter-page">counter-page</Link>
            </li>
  
            <li>
              <Link to="counter-app">CounterApp</Link>
            </li>
            
            <li>
              <Link to="event-app">EventsApp</Link>
            </li>
            
            <li>
              <Link to="Provider-Example">ProviderExample</Link>
            </li>
    
            <li>
              <Link to="Grid-Memory-Game">GridMemoryGame</Link>
            </li>
            
            <li>
              <Link to="Users">UsersPage</Link>
            </li>
            
            <li>
              <Link to={E_COMMERCE_SIGN_IN_PATH}>E-Commerce App</Link>
            </li>
            
            <li>
              <Link to="Practice-Advanced-Concepts-Route">PracticeAdvancedConceptsRoute</Link>
            </li>
            
          </ul>
        </nav>
        );
    }
}