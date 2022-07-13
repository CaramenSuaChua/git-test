import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponents';
// import { Loading } from './LoadingComponent';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dish : DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {
    if (!this.state.selectedDish) {
        
        this.setState({ selectedDish: dishId })
    } else if (this.state.selectedDish === dishId) {
        
        this.setState({ selectedDish: null })

    } else {
        this.setState({ selectedDish: dishId })

    }

}

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dish} 
        onClick = {(dishId) => this.onDishSelect(dishId)}/> 
        <DishDetail dish = {this.state.dish.filter (
            (dish) => dish.id === this.state.selectedDish
            )[0]} />
      </div>
    );
  }
}

export default Main;

