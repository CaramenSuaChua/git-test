import React, { Component } from 'react';
import Home from'./HomeComponent';
import Menu from './MenuComponents';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponents';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom'
import { LEADERS } from '../shared/leader';
import About from './AboutComponent';
import Contact from './ContactComponent';


class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dish : DISHES, 
     
    };
  }

  render() {
    const HomePage =() => {
      return (
        <Home />
      );
    }
    return (
      <div >
        <Header />
        <Switch>
          <Route path='/home' component ={HomePage} />
          <Route exact path='/menu' 
          component ={() => <Menu dishes ={this.state.dish} />} />
          <Route  path ='/Aboutus' component = {About} />
          <Route exact path ='/contactus' component= {() => {return <Contact dishes={this.state.dish} /> }}  />
          <Redirect to='/home' />
        </Switch>
        <Footer /> 
      </div>
    );
  }
}

export default Main;

