import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import SubOption from './Option.js'



const Button = styled.a`
  color:#262626;
  text-align:left;
  display:inline-block;
  margin: 2px;
  padding: 10px 30px;
  width:800px;
  font-size:20px;
  line-height:1.8;
  border: 5px solid white;
  
  background-color: Transparent;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover{
    color:#c0c0c0;
    appearance: none;
  }

  :focus {outline:none;}

  
`

class Option extends Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <div className="App">
        <Link to={this.props.linkto}><Button>{this.props.text}</Button></Link>
      </div>
    );
  }
}

export default Option;
