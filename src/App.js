import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/StaffListComponent';
import { STAFFS } from './shared/staffs'
import dateFormat from 'dateformat' ; 


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      staff : STAFFS 
    }
  }
  
  render() {
    return (
      <div className="App">
        
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ứng dụng quản lí nhân sự v1.0 </NavbarBrand>
          </div>
        </Navbar>
          <Menu  staffs = {this.state.staff} /> 
      </div>
    );
  }
};

export default App;

