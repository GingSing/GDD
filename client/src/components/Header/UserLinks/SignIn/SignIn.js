import React, { Component } from 'react';

import { Overlay } from '../../../../components';

import './SignIn.css';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      on: false,
    }
  }

  handleClick(){
    this.setState({
      on: !this.state.on
    });
  }

  render(){
    return(
      <div className="signIn">
      { this.state.on ? <Overlay>
          <div className="signInOverlay">
          <h3>Sign In</h3>
          <input />
          <input />
          <button onClick={this.handleClick}>
            <label>Sign Out</label>
          </button>
          </div>
        </Overlay>:
        <button className="signInBtn" onClick={this.handleClick}>
          <label> Sign In </label>
        </button>
      }
      </div>
    );
  }
}

export default SignIn;
