import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from './images/logo2.png';
import { makeStyles,createMuiTheme, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20rem',
    },
  },
}));


const Sign_in_forgot = () => {
    
  const classes = useStyles();

  return (
    
    <div className="container1">
      <Navbar />
        <a className="h21"><br/>Sign into CoralOS</a>
        <div className="container8">
            <a className="p6">Trouble Logging In?<br/><br/></a>
            <a className="p5">Enter your email or phone and we'll send you a link to <br />get back into your account.</a>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" placeholder="Email or Phone" variant="outlined" size="small"/>
        
        </form>
        <Link to='/home'  className="link1"><Button className="button2">Send Login Link</Button></Link>
        <div className="Text1"><span>or</span></div>
        <div className="linkdiv1">
            <Link to="/Sign_up" className="link2">Create new account</Link>
        </div>
      
        
        <Footer/>
    </div>
  );
};

export default Sign_in_forgot;