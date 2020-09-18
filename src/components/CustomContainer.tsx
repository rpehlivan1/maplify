import React from 'react';
import {Container, Header} from 'rsuite';
import NavBar from './NavBar';
import CustomContent from './CustomContent';
import '../scss/header.scss';

const CustomContainer = () => {

  return (
    <Container>
      <Header>
        <NavBar/>
      </Header>
      <CustomContent/>
    </Container>
  )
}

export default CustomContainer;
