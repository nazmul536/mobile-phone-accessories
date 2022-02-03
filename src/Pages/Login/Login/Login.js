import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../../Images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';



const Login = () => {
    const [loginData,setLoginData]=useState({})

    const handleOnChange= e => {
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        e.preventDefault();
    }

    const handleLoginSubmit = e => {
        alert('hlw form')
        e.preventDefault()
    }


    return (
       <div>
            <Navigation></Navigation>
       <Container>
           <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <Typography sx={{mt:10,fontWeight:700,fontSize:26}} variant="body1" gutterBottom>
        Login
      </Typography>
      
      <form onSubmit={handleLoginSubmit} >
    
      <TextField
      sx={{width:1, m:1}}
      id="standard-basic"
          label="Your Email"
          type="name"
          name="email"
        onChange={handleOnChange}
          variant="standard" 
        />
        
      <TextField
       sx={{width:1, m:1}}
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={handleOnChange}
          autoComplete="current-password"
          variant="standard" 
        />

        <Button sx={{width:"75%",m:1}} type='submit' variant="contained">Login</Button>

        <NavLink style={{ textDecoration:'none'}}  to='/register'>
        <Button  sx={{width:'75%', m:1}} type='submit' variant="text">New User? Please Register</Button>
        </NavLink> 
      </form>
  </Grid>
        <Grid item xs={12} md={6}>
        <img 
        style={{width:'600px', textAlign:'center'}} 
        alt=""
        src={login}/>
        </Grid>

</Grid>
       </Container>
       </div>
    );
};

export default Login;