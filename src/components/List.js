import React, { Component } from 'react';
import styled from 'styled-components'
import FinalStepInformation from './FinalStepInformation.js'
import Option from './Option.js'
import '../App.css';


class List extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  renderOptionComponents=()=>{
    if(this.props.step === 'GetStarted'){
      return(
        <div>
        <Option linkto={'/eviction/'} text='my landlord has threatened to evict me' />
        <Option linkto={'/rentincrease/'} text='my landlord is asking for a rent increase' />
        <Option linkto={'/heating/'} text='my apartment has a heating problem' />
        <Option linkto={'/repairs/'} text=' my apartment needs repairs' />
        <Option linkto={'/harassment/'} text=' my landlord is racist/has harassed me/does not respect privacy' />
        </div>
      )
    } else if(this.props.step === 'Eviction'){
      return(
        <div>
        <Option linkto={'/finalstep/'} text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
        <Option linkto={'/rentincrease/'} text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' />
        <Option linkto={'/heating/'} text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' />
        </div>
      )
    }else if(this.props.step === 'FinalStep'){
      return(<FinalStepInformation />)
    }
  }



    render() {
    return (
      <div className="App">
      <h1>{this.props.step}</h1>
      {this.renderOptionComponents()}
      </div>

      
    );
  }
}

export default List;
