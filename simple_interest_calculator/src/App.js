import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './index.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const App=() => {
  const [p,setP]=useState(0);
  const [t,setT] = useState(0);
  const [r,setR] = useState(0);
  const [si, setSi] = useState(0);

  const calculatesi = () =>{
    setSi(p*t*r/100);
  }
  return (
    <div className="div">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
         
        </Toolbar>
      </AppBar>
      <br/><br/>
      <TextField onChange={(event)=>setP(event.target.value)} id="outlined-basic" label="Enter Principle" variant="outlined" />
      <br/><br/>
      <TextField onChange={(event)=> setT(event.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" />
      <br/><br/>
      <TextField onChange={(event)=> setR(event.target.value)} id="outlined-basic" label="Enter Rate" variant="outlined" />
      <br/><br/>
      <Button onClick={()=> calculatesi()} variant="contained">Calculate</Button>
      <Typography variant="h6" gutterBottom>
        Simple Interest is: {si}
      </Typography>
    </Box>
    </div>
  );
}

export default App;
