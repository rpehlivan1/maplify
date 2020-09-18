import React, { useEffect, useState } from 'react';
import {Content} from 'rsuite';
import CustomInput from './CustomInput';
import '../scss/content.scss'

const CustomContent = () => {
  return (
    <Content>
      <div>
        <h2>More than just map</h2>
        <span className="location-span">Type any character find any location!</span>
        <CustomInput/>
      </div>
    </Content>
  )
}

export default CustomContent;
