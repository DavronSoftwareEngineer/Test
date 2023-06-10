import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { categoryTask } from '../../redux/actions';

export default function BasicSelect() {
  const [category, setCategory] = React.useState(0);
  const handleChange = (event) => {
    setCategory(event.target.value);
    categoryTask(event.target.value);
  }; 
  const categorys = useSelector((state) => state.categorys);
   
  return (
    <Box sx={{ width:  "100%"}}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          size='small'
          defaultValue={0}
        >
          {categorys.map((item, index) => (
            <MenuItem value={item.number} key={index}>{item.tetle}</MenuItem>
          ))}  
        </Select>
      </FormControl>
    </Box>
  );
}
