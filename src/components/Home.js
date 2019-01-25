import React, { Component } from 'react';
import hero from '../images/mtl-apt.jpg'
import styled from 'styled-components'
import '../App.css';

const Hero = styled.div`
    width:55%;
    max-height:100%;
    position:absolute;
    top:0;
    left:0;
`

class Home extends Component {
  constructor(props){
    super(props)
  }

      
    render() {
    return (
      <div className="App">

    <Hero className='hero'  />
        
      </div>
    );
  }
}

export default Home;


