import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import icon1 from './images/icon1a.svg';
import icon2 from './images/icon2p.svg';
import icon3 from './images/icon3p.svg';
import {Button,Avatar} from '@material-ui/core';

const Menu1 = () => {

  return (
      <div className="menu">
          <div className="iconslist">
            <div className="icons">
            <Link to='/Home'><img src={icon1} /></Link>
              <a className="iconlabel">Home</a>
            </div>
            <div className="icons">
            <Link to='/devices'><img src={icon2}/></Link>
              <a className="iconlabel">Controls</a>
            </div><div className="icons">
            <Link to='/report'><img src={icon3}/></Link>
              <a className="iconlabel">Report</a>
            </div>
          </div>
          </div>
  );
};

export default Menu1;