import React from 'react'
import './SearchWindow.css'

import { Input } from '@chakra-ui/react'
const SearchWindow = () => {
  return (
    <div>
        <li> Patient ID <Input></Input></li>
        <li> Patient Name <Input></Input> </li>
        <li> Gender (M/F)</li>
        <li> Acquisition Date</li>
        <li> PR Interval</li>
        <li> QT Interval</li>
        <li> Ventricle Rate</li>
        <button type="button" className="btn">Search</button>
    </div>
  )
}

export default SearchWindow