import React,{useState,useEffect,selectChange,cardSelector,Component} from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Menu1 from './Menu1';
import Device from './Device';
import './style.css';
import { Menu } from '@material-ui/icons';

  

const Report = () => {

  return (
    
    <div>
        <Navbar1/>
        <div className="container4">
        <Menu1/>
        <Device/>
        <div className="report">
          <a className="h31">Generate Report</a>
            <div className="container7">
            <a className="p3">Select the devices you wish to generate reports.<br/></a>           
            <div className="dates">
            <div className="sdate">
              <div  className="date1"><a className="p3">Startdate</a></div>
              <input type="date"  name="startDate" className="date2" placeholder="select start date"/>
              </div>
            
            <div className="edate">
              <div  className="date1"><a className="p3">Enddate</a></div>
              <input type="date"  name="endDate" className="date2" placeholder="select end date"/>
              </div>
              </div>
              <div className="format">
              <div  className="format1"><a className="p3">Format</a></div>                                                                                 
                 <div className="format2">                                    
              </div> 
              
              </div>
            </div>
            </div>
        </div>
        </div>
  );
};

export default Report;