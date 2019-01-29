import React, { Component } from 'react';
import hero from '../images/three-apt.jpg'
import styled from 'styled-components'
import '../App.css';

import Slider from 'react-slick'



const Hero = styled.header`
  background-image: linear-gradient(to left bottom, #97afc4cc, #1d2731cc), url(${hero});
  background-size: cover;
  min-height: 90vh;
  background-position: top;
`

class Home extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
        {/* <header className="App-header" style={{ backgroundImage: `url(${hero})`, backgroundSize: '300px 100px' }}></header> */}
        <Hero></Hero>
        {/* <img src={hero} className='hero' /> */}
        {/* <img src={hero} /> */}


      </div >
    );
  }
}

export default Home;


