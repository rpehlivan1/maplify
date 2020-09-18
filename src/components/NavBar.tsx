import React from 'react';
import { Nav, Navbar, Icon} from 'rsuite';

const NavBar = () => {

  return (
    <Navbar.Body >
      <Nav>
        <Nav.Item className='maplify'>Maplify</Nav.Item>
        <Nav.Item  icon={<Icon icon="home"/>}>Home</Nav.Item>
        <Nav.Item>About</Nav.Item>
      </Nav>
    </Navbar.Body>
  )
}

export default NavBar;
