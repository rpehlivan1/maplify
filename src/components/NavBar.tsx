import React from 'react';
import { Nav, Navbar, Icon } from 'rsuite';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const NavBar = () => {

  return (
    <Router>
      <Navbar.Body>
        <Nav>
          <Nav.Item componentClass={Link} to='/' className='maplify'>Maplify</Nav.Item>
          <Nav.Item componentClass={Link} to='/' icon={<Icon icon="home"/>}>Home</Nav.Item>
          <Nav.Item componentClass={Link} to='/about'>About</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Router>
  )
}

export default NavBar;
