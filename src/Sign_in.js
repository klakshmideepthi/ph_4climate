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


const Sign_in = () => {
    
  const classes = useStyles();

  return (
    
    <div className="container1">
      <Navbar />
      <div className="container6">
        <a className="h21"><br/>Sign into CoralOS<br/></a>
        <a className="p5"><br/>Continue with the Google account or email address you use to sign in.</a>
      </div>
        <Link to='/add_phone_number'  className="link1">
          <Button className="button1" variant="outlined" ><img src={logo} /><span> &nbsp;Continue with Google</span></Button>
        </Link>
        <div className="Text1"><span>or</span></div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" placeholder="Email Address" variant="outlined" size="small"/>       
        </form>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" placeholder="Password" variant="outlined" size="small"/>
        </form>
      
        <div className="checkbox1">
          <input type='checkbox' />
          <label>Remember me</label>
        </div>
        <Link to='/home'  className="link1"><Button className="button2">Sign in</Button></Link>
        <div className="linkdiv1">
            <Link to='/sign_in_forgot'  className="link1">Forgot your password ?</Link>
            <br/>
            <Link to="/sign_up" className="link2">Create an account</Link>
        </div>
        <Footer/>
    </div>
  );
};

export default Sign_in;