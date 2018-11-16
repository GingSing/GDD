import React, { Component } from 'react';

class Game extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="game">
        <h3>{this.props.match.params.id}</h3>
        <div className="reviews">
        </div>
      </div>
    );
  }
}

export default Game;
