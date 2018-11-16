import React, { Component } from 'react';

import './Jumbotron.css';

class Jumbotron extends Component{

  render(){
    return(
      <div className="jumbotron">
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;
