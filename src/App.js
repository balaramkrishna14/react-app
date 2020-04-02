import React from 'react';
import {CarsList} from './components/CarsList/index.js';
import './components/CarsList/index.css';

import {ToDo} from './components/todoList/todoList.js';
import './components/todoList/todoList.css';

import {FormComponents} from './components/Forms/FormComponents.js';

import CountriesDashBoardApp from './components/Countries/DashBoardApp.js';
import './components/Countries/Countries.css';

import CountryDetails from './components/Countries/CountryDetails.js';
//import {Header} from './components/Countries/header.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      selectedTheme:'light',
    };
  }
  
  onChangeTheme = () => {
    if(this.state.selectedTheme === 'light'){
            this.setState({
            selectedTheme:'dark',
            });    
        }
        else{
            this.setState({
            selectedTheme:'light',
            });
        }
  }
  
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="Home">Home</Link>
            </li>
            
            <li>
              <Link to="CarsList">CarsList</Link>
            </li>
            
            <li>    
              <Link to="ToDo">TodoList</Link>
            </li>
            
            <li>
              <Link to="FormComponents">Form Component</Link>
            </li>
            
            <li>
              <Link to="CountriesDashBoardApp">Countries DashBoardApp</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. comments*/}
        <Switch>
          
          <Route path="/Home">
            <Home />
          </Route>
          
          <Route path="/CarsList">
            <CarsList />
          </Route>
          
          <Route path="/ToDo">
            <ToDo />
          </Route>
          
          <Route path="/FormComponents">
            <FormComponents />
          </Route>
          
          <Route path="/CountriesDashBoardApp">
            <CountriesDashBoardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          <Route path="/:id" children={<CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>}/>
          
        </Switch>
      </div>
    </Router>
  );
}
}
//<Route path="/:id" children={<Header />} />

function Home() {
  return <h2>Home</h2>;
}

