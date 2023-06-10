import { Box, Button, Typography } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import React, { useEffect, useRef, useState } from 'react'
import { timerTask } from '../../redux/actions';

const formatTime = (time) => {
    let minutes = Math.floor(time/60)
    let seconds = Math.floor(time - minutes * 60)

    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

function CountDown({seconds, setVaqtOldin}) {
    
    const [countdown, setCountDown] = useState(seconds);
    const [clear, setClear] = useState(false)
    const timerId = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000)
        return () =>  clearInterval(timerId.current);
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current)
            // alert("End")
            timerTask(countdown)
        }
    }, [countdown])

    return (
        <Box sx={{
            display: "flex",
            alignItems: 'center'
        }}>
            <Button variant='contained' 
                onClick={() => {
                    setVaqtOldin(true)
                    setCountDown(0)
                }} sx={{textTransform: "none", fontWeight: "bold", mr: 2}}>Vaqtidan oldin tugatish</Button>
                
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                backgroundColor: countdown === 0 ? red[500] : blue[700],
                borderRadius: 1,
                boxShadow: 2,
            }}>
                <Typography sx={{mr: 1, color: "#fff", fontWeight: 'bold'}}>Timer:</Typography>
                <Box sx={{color: "#fff"}}>{formatTime(countdown)}</Box>
            </Box>
        </Box>
    )
}

export default CountDown;