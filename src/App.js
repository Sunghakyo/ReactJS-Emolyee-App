import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristoreante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}



export default App;
