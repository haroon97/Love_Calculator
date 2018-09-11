import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='links'>
      <NavLink to='/' exact={true} className='nav'>Home</NavLink>
      <NavLink to='/nasa' className='nav'>Nasa IOD</NavLink>
      <NavLink to='/iss' className='nav'>Space Station</NavLink>
    </div>
  );
};

export default Header;