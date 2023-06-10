import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import BasicSelect from '../../components/categoriya-select';
import { useSelector } from 'react-redux';
import { getTests } from '../../api';
import { useNavigate} from 'react-router-dom';
import { testsTask, userTask } from '../../redux/actions';

function Home() {
    const [number, setNumber] = React.useState("");
    const [isim, setIsim] = useState("");
    const [fameliya, setFameliya] = useState("");

    console.log(number);
    const category = useSelector((state) => state.category);
    
    const getTest = async () => {
       const res = await getTests(number === "" ? 10 : number, category === 0 ? "" : category);
        testsTask(res.results);
    }
    
    const navigate = useNavigate();
  return (
    <Box sx={{height: "100vh"}}>
        <Container sx={{height: "100%"}}>
                <Grid container height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={10} sm={6} md={4} lg={4} xl={4}  sx={{
                        boxShadow: 5,
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Box component={"form"}>
                        <Typography variant='h4' 
                            color={"#000"} 
                            textAlign={"center"}
                            mb={3}
                            >UzHan-Test</Typography>
                            <TextField variant='outlined' type='text'
                                fullWidth label="Isim" size='small'
                                value={isim}
                                onChange={(e) => setIsim(e.target.value)}
                                />
                            <TextField variant='outlined' type='text'
                                fullWidth label="Fameliya" size='small'
                                sx={{
                                    my: 3
                                }}
                                value={fameliya}
                                onChange={(e) => setFameliya(e.target.value)}
                                
                                />
                            <TextField variant='outlined' 
                                label="Testlar sonini kiriting min 10 ta max 50 ta" size='small'
                                fullWidth
                                type='number'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                />
                            <Box
                            sx={{
                                my: 3
                            }} 
                            ><BasicSelect/></Box>
                            <Button variant='contained' 
                                onClick={() => {
                                    getTest();
                                    navigate("/test");
                                    userTask(isim, fameliya)
                                }}
                                size='medium' 
                                fullWidth
                                sx={{
                                    textTransform: "none",
                                    fontWeight: "bold"
                                }}
                                >Start</Button>
                        </Box>
                    </Grid>
                </Grid>
        </Container>
    </Box>
  )
}

export default Home;