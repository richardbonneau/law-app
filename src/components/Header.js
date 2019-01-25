import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import '../App.css';
import logo from '../images/logologo.png'
import hero from '../images/apt.jpg'


const HeadSpace = styled.div`
    height: 40px;
`
const MenuLink = styled.div`
    text-align: none;
    color:white;
`

const Logo = styled.img`
  height:50px;
  position:absolute;
  top:5px;
  left:10px;
`

const Hero = styled.img`
  height:30px;
`

class Header extends Component {
  constructor(props){
    super(props)
  }

  
    render() {
    return (
      <div className="HeaderBackground">
      <HeadSpace />
      <Logo src={logo} />
              <Link to="/home"><button>Home</button></Link>
              <Link to="/step1"><button>Get Started</button></Link>
              <Link to="/about"><button>Our mission</button></Link>

      </div>
    );
  }
}

export default Header;


