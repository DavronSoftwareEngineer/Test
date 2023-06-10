import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { sumTask } from '../../redux/actions';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({tests}) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [sum, setSum] = React.useState(1);
  console.log(sum);
  return (
    <div>
        {tests.map((item, index) => (
            <Accordion key={index} expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography><span style={{marginRight: "5px"}}>Test</span>  {index+1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontSize: "18px"
                  }}>
                    <span style={{marginRight: "15px"}}>#{index+1}</span>   
                    {item.question}
                  </Typography>
                  <Box sx={{mt: 2}}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      row
                    >
                      <FormControlLabel  sx={{mr: 5}} value={item.incorrect_answers[0]} control={<Radio />} label={<span><span style={{fontWeight: "bold", marginRight: 3}}>A.</span> {item.incorrect_answers[0]}</span>} />
                      <FormControlLabel sx={{mr: 5}} value={item.incorrect_answers[2]} control={<Radio />} label={<span><span style={{fontWeight: "bold", marginRight: 3}}>B.</span> {item.incorrect_answers[2]}</span>} />
                      <FormControlLabel onClick={() => {
                        setSum(sum + 1)
                        sumTask(sum)
                      }} sx={{mr: 5}} value={item.correct_answer} control={<Radio />} label={<span><span style={{fontWeight: "bold", marginRight: 3}}>C.</span> {item.correct_answer}</span>} />
                      <FormControlLabel sx={{mr: 5}} value={item.incorrect_answers[1]} control={<Radio />} label={<span><span style={{fontWeight: "bold", marginRight: 3}}>D.</span> {item.incorrect_answers[1]}</span>}/>
                    </RadioGroup>
                  </FormControl>
                  </Box>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
  );
}
