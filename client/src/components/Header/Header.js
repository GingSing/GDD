import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SignIn } from './UserLinks';

import './Header.css';

class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="header">
        <Logo name="GDD" />
        <UserLinks />
      </div>
    );
  }
}

const Logo = ({name}) => {
  return(
    <div className="logo">
      <span>{ name }</span>
    </div>
  );
}

const UserLinks = () => {
  return(
    <div className="userLinks">
      <SignIn />
    </div>
  );
}

Header.propTypes = {
  sticky: PropTypes.bool,
}

Logo.propTypes = {
  name: PropTypes.string,
}

export default Header;
