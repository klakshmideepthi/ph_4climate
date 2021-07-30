import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import pic1 from './images/pic3.svg';


  
const Getstarted = () => {

  return (
    <div>
        <Navbar/>
        <div className="container2">
        <div className="pic1">
            <img src={pic1}/>
        </div>
        <div className="content1">
            <h2>Welcome,[First Name,Last Name]</h2>
            <br/>
            <a className="Text2">Insights everywhere </a>
            <p>Get complete information on the parameters with our data insights to optimise your perfomance while sitting at home</p>
            <br/>
            <a className="Text2">Control your devices on the go</a>
            <p>Control, configure and calibrate in hassle-free way</p>
            <br/>
            <a className="Text2">Insights to results</a>
            <p>Export your valuable data and insights for strategic results</p>
            <br/>
            <a className="Text2">Stay Alerted</a>
            <p>Set limits to your parameters and relax. We shall notify you if they are away from permissible limits</p>
            <Link to='/home' className="link1"><Button className="button4">Let's get Started</Button></Link>
        </div>
        </div>
    </div>
  );
};

export default Getstarted;