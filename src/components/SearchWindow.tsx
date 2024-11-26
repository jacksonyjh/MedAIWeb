import React, { useState } from 'react'
import './SearchWindow.css'

import { Button, Input, RadioGroup, Radio, Stack, background } from '@chakra-ui/react'

const SearchWindow = () => {


  const [gender, setGender] = useState('');
  const [acqDate, setAcqDate] = useState('');

  const handleGenderClick = (selectedGender: string) => {
    console.log({selectedGender})
    setGender(selectedGender);
  }
  return (
    <div>
        <div> Patient ID <Input placeholder = 'Enter Patient ID ' height='25px'></Input></div>
        <div> Patient Name <Input placeholder = 'Enter Patient Name' height='25px'></Input> </div>
        <div> Gender
          <Stack direction='row' justify='center'>
            {['Male', 'Female', 'Other'].map(genderOption => (
              <Button key ={genderOption} className='gen btn' onClick={() => handleGenderClick(genderOption)}
              style={{backgroundColor: gender === genderOption ? 'lightblue' : 'white'}}> {genderOption}</Button>
            ))}
          </Stack>
        </div>
        <div> Acquisition Date </div>
        <div> PR Interval</div>
        <div> QT Interval</div>
        <div> Ventricle Rate</div>
        <button type="button" className="btn">Search</button>
    </div>
  );
};

export default SearchWindow;