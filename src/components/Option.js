import React, { Component } from 'react';
import styled from 'styled-components'



const Button = styled.button`
  color:white;
  display:inline-block;
  margin: 0 10px 0 0;
  padding: 15px 45px;
  width:800px;
  font-size:20px;
  line-height:1.8;
  box-shadow:none;
  border-radius:0;
  background-color: Transparent;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover{
    color:blue;
    appearance: none;
  }

  
`

class Option extends Component {
  constructor(props){
    super(props)
  }

  randomFunction(){
    console.log('func')
  }

  render() {
    return (
      <div className="App">
        <Button>{this.props.text}</Button>
      </div>
    );
  }
}

export default Option;
