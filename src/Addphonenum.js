import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20rem',
      },
    },
  }));

  
const Addphonenum = () => {
    const classes = useStyles();

  return (
    <div className="body">
        <Navbar/>
        <div className="container3">
            <h3>Add a phone number</h3>
            <p>Your phone number helps us keep your account secure by adding an additional layer of verification.
                 It also helps to keep your regularly updated with your data on the dashboard, 
                notifying you and alerting you. You can always stay connected with us and our products.</p>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="+91 | Phone Number" variant="outlined" size="small"/>
            </form>
            <Link to='/get_started'  className="link1"><Button className="button3">Let's proceed</Button></Link>
        </div>
    </div>
  );
};

export default Addphonenum;