import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';



import List from './components/List.js'
import Header from './components/Header.js'
import About from './components/About.js'
import Home from './components/Home.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const GetStarted = (props) => {
      return (
        <List
          step={'GetStarted'}
        />
      )
    }

    const Eviction = (props) => {
      return (
        <List
          step={'Eviction'}
        />
      )
    }

    const FinalStep = (props) => {
      return (
        <List
          step={'FinalStep'}
        />
      )
    }

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/home/" component={Home} />
          <Route path="/step1/" component={GetStarted} />
          <Route path="/eviction/" component={Eviction} />
          <Route path="/finalstep/" component={FinalStep} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;


