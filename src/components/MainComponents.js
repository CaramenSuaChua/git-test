import React, { Component } from 'react';
import Home from'./HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponents';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom'

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
          <Redirect to='/home' />
        </Switch>
        <Footer /> 
      </div>
    );
  }
}

export default Main;

