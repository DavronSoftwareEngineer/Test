import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CountDown from '../../components/timer';
import { blue, grey } from '@mui/material/colors';
import CustomizedAccordions from '../../components/accordion';
import { natijaTask } from '../../redux/actions';
import formbot from './form';
import FormBot from './form';

function Test() {
    const tests = useSelector((state) => state.tests)
    const timer = useSelector((state) => state.timer)
    const sum = useSelector((state) => state.sum)
    const user = useSelector((state) => state.user)
    let name = user.isim 

    // const natijabot = useSelector((state) => state.natijabot);
    // console.log(natijabot);
    let leng = tests.length;
    console.log(leng);
    const navigate = useNavigate();   
    
    const [natija, setNatija] = useState(false);
    const [vaqtoldin, setVaqtOldin] = useState(false);
    
  return (
    <Box>
        <Box sx={{
                py: 2,
                backgroundColor: blue[500],
                boxShadow: 4,
                position: "sticky",
                top: 0,
                zIndex: 1,
            }}>
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    
                }}>
                <Typography variant='h4' color={"#fff"}>UzHan-Test</Typography>
                <Box><CountDown seconds={60*30} setVaqtOldin={setVaqtOldin}/></Box>
            </Container>
        </Box>
        <Container sx={{
                py: 3,
            }}>
            <Typography variant='h5' sx={{mb: 3}}>Siz topgan har bitta to'g'ri savolga 2 ball dan beriladi!</Typography>
            <Box >
                <CustomizedAccordions tests={tests}/>
            </Box>
            <Box display={"flex"} justifyContent={"end"} my={3}>
                <Button variant='contained' disabled={(timer != 0 || vaqtoldin === false)  ? true : false} 
                    onClick={() => {
                        setNatija(true)
                        // natijaTask(name, leng, sum*2, sum, sum ? leng-sum : 0)
                        FormBot(user.isim, leng, sum*2, sum, sum ? leng-sum : 0)
                    }} sx={{textTransform: 'none', fontWeight: "bold"}}
                    >Natijani ko'rish</Button>
            </Box>
            <Box sx={{
                display: natija ? "block" : "none"
            }}>
            <Box sx={{
                backgroundColor: grey[200],
                borderRadius: "5px",
                p: 2,
                boxShadow: 2

            }}>
                <Typography variant='h4'>Natijalar</Typography>
                <Box sx={{mt: 2}}>
                    <Typography>Talaba: <span>{user.isim}</span> <span>{user.fameliya}</span></Typography>
                    <Typography>Jami testlar soni: <span style={{marginLeft: "20px", fontWeight: "bold"}}>{leng}</span></Typography>
                    <Typography>Jami to'plagangan ball: <span style={{marginLeft: "20px", fontWeight: "bold"}}>{sum*2}</span></Typography>
                    <Typography>To'g'ri topilgan savollar soni: <span style={{marginLeft: "20px", fontWeight: "bold"}}>{sum}</span></Typography>
                    <Typography>No to'g'ri topilgan savollar soni: <span style={{marginLeft: "20px", fontWeight: "bold"}}>{sum ? leng-sum : 0}</span></Typography>
                </Box>
            </Box>
            <Button variant='contained' sx={{textTransform: "none", fontWeight: 'bold', mt: 2}} onClick={() => navigate("/")}>Restart</Button>
            </Box>
        </Container>
    </Box>
  )
}

export default Test;