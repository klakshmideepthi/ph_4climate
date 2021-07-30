import React,{useState,useEffect,selectChange,cardSelector,Component} from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Menu1 from './Menu1';
import Device from './Device';
import icon1 from './images/icon1a.svg';
import icon2 from './images/icon2p.svg';
import icon3 from './images/icon3p.svg';
import './style.css';
  

class Home extends Component {


  render(){

  return (
    
    <div>
        <Navbar1/>
        <div className="container4">
        <Menu1/>
        <Device/>
        <div className="analytics">
          <a className="h31">Analytics</a>
            <div className="container5">
              <div>
              <div className="device3">
                {/* <a className="p4">pH Graph</a>
            <Link to='/add_phone_number'  className="link2">
              <Button className="button5" variant="outlined" ><span>Today</span></Button>
            </Link> */}
          </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  );
            }
};

export default Home;