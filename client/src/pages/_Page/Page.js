import React, { Component } from 'react';
import { Header } from '../../components';

import './Page.css';

class Page extends Component{
  constructor(props){
    super(props);
    this.state={
      scrollY: 0,
      sticky: false,
    }
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount(){
    this.setState({
      scrollY: window.pageYOffset
    });
    window.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler(){
    if(window.pageYOffset > this.state.scrollY){
      this.setState({
        sticky: true,
      });
    }else{
      this.setState({
        sticky: false,
      });
    }
  }

  render(){
    return(
      <div className="page">
        <Header sticky={this.state.sticky}/>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
