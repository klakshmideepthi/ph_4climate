import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {Button} from '@material-ui/core';
import logo from './images/logo2.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20rem',
      innerHeight:2,
    },
  },
}));



const Sign_up = () => {

  const classes = useStyles();

  return (
    
    <div className="container1">
        <Navbar/>
        <div className="container6">
          <a className="h21"><br/>Sign up for CoralOS<br/></a>
          <a className="p5"><br/>Continue with the Google account or email address you use to sign in.</a>
        </div>
        <Link to='/add_phone_number'  className="link1">
          <Button className="button1" variant="outlined" ><img src={logo} /><span> &nbsp;Continue with Google</span></Button>
        </Link>
        <div className="Text1"><span>or</span></div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Full Name" variant="outlined" size="small"/>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small"/>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="+91 | Phone Number" variant="outlined" size="small"/>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size="small"/>
        </form>
        <Link to='/get_started'  className="link1"><Button className="button2">Sign up</Button></Link>
        <Footer/>
    </div>
  );
};

export default Sign_up;