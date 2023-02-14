import React, { createContext, useContext, useState } from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Grid, Link, MenuItem, Select } from '@mui/material';
import { filterValues } from './utils';
import './instagram.css';
// import BasicModal from './post';

const FilterTab = ({filterClass, setFilterClass}) => {
//   const { filterClass, setFilterClass } = useContext(filterContext);
//   const [filterClass, setFilterClass] = useState("")
  const handleChange = (e) => {
    setFilterClass(e.target.value);
  };
  console.log('@np ', filterClass);
  return (
    <>
      
        {/* <Box> */}
          {/* <Link>Back</Link> */}
          <FormControl fullWidth>
            <InputLabel>Filter</InputLabel>
            
            <Select value={filterClass} label="Age" onChange={handleChange}>
              {filterValues.map((item, index) => (
                <MenuItem value={item.class} key={index}>
                  {item.name}
                  
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        {/* </Box> */}
      
    </>
  );
};

export default FilterTab;