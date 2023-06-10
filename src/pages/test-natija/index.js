import { Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function TestNatija() {
  const navigate = useNavigate();
  return (
    <Box>
      <Button variant='contained' sx={{textTransform: "none", fontWeight: 'bold'}} onClick={() => navigate("/")}>Restart</Button>
    </Box>
  )
}

export default TestNatija;