import React,{useState,useEffect,selectChange,cardSelector,Component} from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Menu1 from './Menu1';
import Device from './Device';
import Adding from './Adding';
import icon1 from './images/icon1a.svg';
import icon2 from './images/icon2p.svg';
import pic1 from './images/Group 552.svg';
import './style.css';
import TextField from '@material-ui/core/TextField';

class Add_device extends Component {


  render(){

  return (
    
    <div>
        <Navbar1/>
        <div className="container4">
        <Menu1/>
        <Device/>
        <div className="adddevice">
          <a className="h31">Add device</a>
            <div className="container11">
              <Adding/>
            </div>
        </div>
        </div>
    </div>
  );
            }
};

export default Add_device;


