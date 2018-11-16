import React, { Component } from 'react';
import Image from './some.jpg'

import './HeroHeader.css';

class HeroHeader extends Component{
  constructor(props){
    super(props)

    this.state={
      currNum: 0,
      pictures: [],
    }

    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount(){
    if(this.props.pictures){
      this.setState({
        pictures: this.props.pictures,
      });
    }
  }

  handleClick(e){
    this.setState({
      currNum: e.target.value
    });
  }

  render(){
    let { currNum, pictures } = this.state;
    let style={
      backgroundImage:`url(${Image})`,
    };
    return(
      <div className="heroHeader" style={style}>
        {
          this.state.pictures.map((key) => {
            return(
              <input key={key} value={key} name="picture" type="radio" onClick={this.handleClick}/>
            );
          })
        }
      </div>
    );
  }
}

export default HeroHeader;
