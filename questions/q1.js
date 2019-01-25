import React, { Component } from 'react';
import styled from 'styled-components'
import Option from './components/Option.js'
import './App.css';


class App extends Component {
  
  render() {
    

    return (
      <div className="App">
        <Option text='heating' />
        <Option text='Unresolved Dispute with a neighbor' />
        <Option text='Repairs' />
        <Option text='Rent' />
      </div>
    );
  }
}

export default App;
