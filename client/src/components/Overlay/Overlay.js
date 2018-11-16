import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

const overlay = document.getElementById('overlay');

class Overlay extends Component{
  constructor(props){
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount(){
    overlay.appendChild(this.el)
  }


  componentWillUnmount(){
    overlay.removeChild(this.el);
  }
  render(){
    return ReactDOM.createPortal(
      <div className="overlay">
        {this.props.children}
      </div>,
      this.el,
    );
  }
}

export default Overlay;
