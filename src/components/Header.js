import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Crash from '../static/img/crash.jpg';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 rounded mx2 black text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex align-center justify-between px4">
    <h1 className="h1">🍜 My Recipes </h1>
    <div>
      <img src={Crash} alt="crash" style={{ width: 200 }} />
    </div>
    <nav>
      <HeaderLink to="/"> Home </HeaderLink>
      <HeaderLink to="/favorites"> Favorites </HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
