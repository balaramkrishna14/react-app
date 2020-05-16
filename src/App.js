import React from 'react';
import {Provider} from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignInRoute from './authentication/routes/SignInRoute/SignInRoute';
import ProductsPage from './E-CommerceApp/components/ProductsPage/ProductsPage.js';
import {productStore,cartStore} from './E-CommerceApp/stores';
import {authStore} from "./authentication/stores";
import {E_COMMERCE_SIGN_IN_PATH,E_COMMERCE_PRODUCTS_PATH} from "./authentication/constants/routeConstants/routeConstants";

const stores={
  authStore,
  productStore,
  cartStore
};

export default class App extends React.Component {
  render(){
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
      
        <Switch>
      
          <Route path={E_COMMERCE_PRODUCTS_PATH} component = {ProductsPage} />
          <Route path={E_COMMERCE_SIGN_IN_PATH} component = {SignInRoute} />
        </Switch>
        
      </div>
    </Router>
  </Provider>  
  );
}
}

//<Route path="/" component = {SignInPage} />
          
//<Route path="/Products-Page" component = {ProductsPage} />




/*import React from 'react';
import {observer,Provider} from 'mobx-react';//its is placed in dashboard-app for rerendering -----also import router if needed
import {observable} from 'mobx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import Home from './components/Home/Home.js'; 
import {CarsList} from './components/CarsList/';
import './components/CarsList/index.css';
import './components/todoList/todoList.css';
import {FormComponents} from './components/Forms/FormComponents.js';
import CountriesDashBoardApp from './components/Countries/DashBoardApp.js';
import './components/Countries/Countries.css';
import CountryDetails from './components/Countries/CountryDetails.js';
import themeStore from './stores/ThemeStore';
import EmojiGame from './components/EmojiGame/EmojiGame.js';
import CounterPage from './components/CounterPage';
import CounterApp from './components/CounterApp/CounterApp';
import UsersPage from './components/UsersPage';


import TodoApp from './components/todoList/TodoApp';
import EventsApp from './components/EventsApp/EventsApp';
import ProviderExample from './components/HandsonPractice/Handson';
import GridMemoryGame from './components/GridMemoryGameApp/GridMemoryGame.js';

import SignInRoute from './authentication/routes/SignInRoute/SignInRoute.js'; 

import stores from './stores';
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
  }
  @observable selectedTheme = "light"
    
  getCurrentTheme = () => {
    //return this.selectedTheme;
    return themeStore.selectedTheme;
  } 
  
  //setCurrentTheme = (theme) => {
  
  onChangeTheme = () => {
    //this.selectedTheme = theme;
    themeStore.setCurrentTheme();
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
  }
  
  render(){
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        
        <Switch>
          <Route path="/">
            <SignInRoute />
          </Route>
          
          <Route exact path="/counter-app">
           <CounterApp />
          </Route>
      
          <Route exact path="/counter-page">
           <CounterPage />
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
          
          <Route path="/event-app">
            <EventsApp />
          </Route>
          
          <Route path="/Provider-Example">
            <ProviderExample />
          </Route>
          
          <Route path="/Grid-Memory-Game">
            <GridMemoryGame onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          
          <Route exact path="/Users" component = {UsersPage} />
          
          
          </Switch>
      </div>
    </Router>
  </Provider>  
  );
}
}*/

/*<Route path="/">
    <Home />
  </Route>*/
