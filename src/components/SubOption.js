import React, { Component } from 'react';
import styled from 'styled-components'



class SubOption extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className="App">
        <div>{this.props.titre}</div>
      </div>
    );
  }
}

export default SubOption;
