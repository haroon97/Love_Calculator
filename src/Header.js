import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to='/' exact={true}>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/nasa'>Nasa IOD</NavLink>
      <NavLink to='/iss'>Space Station</NavLink>
    </div>
  );
};

export default Header;