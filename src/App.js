import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Department from './components/DepartmentComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <Header />
      <div className="App">
        <Main /> 
      </div>
      <Footer /> 
      </BrowserRouter>
      
    );
  }
};

export default App;

