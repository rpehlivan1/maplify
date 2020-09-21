import React from 'react';
import {Content} from 'rsuite';
import '../scss/content.scss'
import CustomModal from './CustomModal';

const CustomContent = () => {
  return (
    <Content>
      <div>
        <h2>More than just map</h2>
        <span className="location-span">Type any character find any location!</span>
        <CustomModal/>
      </div>
    </Content>
  )
}

export default CustomContent;
