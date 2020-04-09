import React from 'react';
import {observer} from 'mobx-react';//its is placed in dashboard-app for rerendering -----also import router if needed
import {observable} from 'mobx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {CarsList} from './components/CarsList/index.js';
import './components/CarsList/index.css';
import './components/todoList/todoList.css';
import {FormComponents} from './components/Forms/FormComponents.js';
import CountriesDashBoardApp from './components/Countries/DashBoardApp.js';
import './components/Countries/Countries.css';
import CountryDetails from './components/Countries/CountryDetails.js';
import EmojiGame from './components/EmojiGame/EmojiGame.js';
import CounterPage from './components/CounterPage/index.js';
import CounterApp from './components/CounterApp/CounterApp.js';
import themeStore from './stores/ThemeStore';

import TodoApp from './components/todoList/TodoApp.js';

//import {configure} from 'mobx';
//configure({ enforceActions : true});

@observer //-->it is a decorater
export default class App extends React.Component {
  
  /*constructor(props){
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
  }*/
  @observable selectedTheme = "light"
    
  getCurrentTheme = () => {
    //return this.selectedTheme;
    return themeStore.selectedTheme;
  } 
  
  //setCurrentTheme = (theme) => {
  
  onChangeTheme = (theme) => {
    //this.selectedTheme = theme;
    themeStore.setCurrentTheme(theme);
  }
  
  
  /*onChangeTheme = () => {
    //selectedTheme={this.getCurrentTheme()}
    //selectedTheme={this.state.selectedTheme}
    if(this.getCurrentTheme() === 'light'){
              this.setCurrentTheme('dark');
        }
        else{
              this.setCurrentTheme('light');
        }
  }*/
  
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
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. comments*/}
        <Switch>
          <Route exact path="/counter-page">
           <CounterPage />
          </Route>
          
          <Route exact path="/counter-app">
           <CounterApp />
          </Route>
          
          <Route path="/Home">
            <Home />
          </Route>
          
          <Route path="/CarsList">
            <CarsList />
          </Route>
          
          <Route path="/TodoApp">
            <TodoApp />
          </Route>
          
          
          <Route path="/FormComponents">
            <FormComponents />
          </Route>
          
          <Route path="/EmojiGame">
            <EmojiGame onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          
          
          <Route path="/CountriesDashBoardApp">
            <CountriesDashBoardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          <Route path="/country-dashboard-app/details/:id" component={CountryDetails}/>
          
          
          </Switch>
      </div>
    </Router>
  );
}
}

function Home() {
  return <h2>Home</h2>;
}

