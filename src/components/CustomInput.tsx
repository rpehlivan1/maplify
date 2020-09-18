import React, { useState } from 'react';
import { Input, InputGroup, Icon } from 'rsuite';



const CustomInput = () => {
  const [location, setLocation] = useState('')

  return (
    <div className='custom-input'>
      <label>Your selected location is {location}</label>
      <InputGroup >
        <Input onChange={(e) => setLocation(e)} value={location}/>
        <InputGroup.Button>
          <Icon icon='search'/>
        </InputGroup.Button>
      </InputGroup>
    </div>
  )
}

export default CustomInput;
