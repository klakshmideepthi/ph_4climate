import React,{useState,useEffect,selectChange,cardSelector,Component} from 'react';
import {Button,Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Menu2 from './Menu2';
import Set_alarm from './Set_alarm';
import Samples_report from './Samples_report';
import Calibrate from './Calibrate';
import Factory_reset from './Factory_reset';
import Device from './Device';
import './style.css';
import { Menu, SignalWifi1BarLockSharp } from '@material-ui/icons';
import icon5 from './images/icon5.svg';
import icon6 from './images/icon6.svg';
import icon7 from './images/icon7.svg';
import icon8 from './images/icon8.svg';
import icon9 from './images/icon9.svg';
import icon10 from './images/icon10.svg';

class Devices extends Component {
  constructor(props) {
      super(props);
      this.state = {
      BackgroundColor1: "button6",
      BackgroundColor2: "button6",
      BackgroundColor3: "button6",
      BackgroundColor4: "button6",
      BackgroundColor5: "button6",
      isActiveClass1: 'false',
      isActiveClass2: 'false',
      isActiveClass3: 'false',
      isActiveClass4: 'false',
      isActiveClass5: 'false',
    };
  };

  setalarm()
  {
    this.setState({
      BackgroundColor1:"button7",
      isActiveClass1: 'true',

      BackgroundColor2:"button6",
      isActiveClass2: 'false',
      BackgroundColor3:"button6",
      isActiveClass3: 'false',
      BackgroundColor4:"button6",
      isActiveClass4: 'false',
      BackgroundColor5:"button6",
      isActiveClass5: 'false',
  });
  }

  calibrate()
  {
    this.setState({
      BackgroundColor2:"button7",
      isActiveClass2: 'true',

      BackgroundColor1:"button6",
      isActiveClass1: 'false',
      BackgroundColor3:"button6",
      isActiveClass3: 'false',
      BackgroundColor4:"button6",
      isActiveClass4: 'false',
      BackgroundColor5:"button6",
      isActiveClass5: 'false',
    });
  }

  wifi()
  {
    this.setState({
      BackgroundColor3:"button7",
      isActiveClass3: 'true',

      BackgroundColor1:"button6",
      isActiveClass1: 'false',
      BackgroundColor2:"button6",
      isActiveClass2: 'false',
      BackgroundColor4:"button6",
      isActiveClass4: 'false',
      BackgroundColor5:"button6",
      isActiveClass5: 'false',
    });
  }

  samplereport()
  {
    this.setState({
      BackgroundColor4:"button7",
      isActiveClass4: 'true',

      BackgroundColor1:"button6",
      isActiveClass1: 'false',
      BackgroundColor2:"button6",
      isActiveClass2: 'false',
      BackgroundColor3:"button6",
      isActiveClass3: 'false',
      BackgroundColor5:"button6",
      isActiveClass5: 'false',
    });
  }

  factoryreset()
  {
    this.setState({
      BackgroundColor5:"button7",
      isActiveClass5: 'true',

      BackgroundColor1:"button6",
      isActiveClass1: 'false',
      BackgroundColor2:"button6",
      isActiveClass2: 'false',
      BackgroundColor3:"button6",
      isActiveClass3: 'false',
      BackgroundColor4:"button6",
      isActiveClass4: 'false',
    });
  }

render(){
  return (
    
    <div>
        <Navbar1/>
        <div className="container4">
        <Menu2/>
        <Device/>
        <div className="devicestatus">
            <a className="h31">Device Status</a>
            <a className="p3">&nbsp;&nbsp;&nbsp;&nbsp;Last updated 10 secs ago </a>
            <div className="container7">
      <div className="status">
            <div className="status1">
              <div  className="strow1">
                <Avatar variant="rounded" src={icon10}/>
                <div className="stinner">
                  <div><a className="p7">Device Name</a></div>
                  <div><a className="p3">pH Sensor 4</a></div>
                </div>
              </div>
              <div  className="strow2">
                <Avatar variant="rounded" src={icon5}/>
                <div className="stinner">
                  <div><a className="p7">Product ID</a></div>
                  <div><a className="p3">LEAFPH009001</a></div>
                </div>
              </div>
              <div  className="strow3">
                <Avatar variant="rounded" src={icon6}/>
                <div className="stinner">
                  <div><a className="p7">Device Status</a></div>
                  <div><a className="p3">Online</a></div>
                </div>
              </div>
            </div>
            
            <div className="status2">
            <div  className="strow1">
                <Avatar variant="rounded" src={icon7}/>
                <div className="stinner">
                  <div><a className="p7">Network </a></div>
                  <div><a className="p3">NetworX wifi</a></div>
                </div>
              </div>
              <div  className="strow2">
                <Avatar variant="rounded" src={icon8}/>
                <div className="stinner">
                  <div><a className="p7">Last Calibrated</a></div>
                  <div><a className="p3">22 Feb 2020 at 19:00</a></div>
                </div>
              </div>
              <div  className="strow3">
                <Avatar variant="rounded" src={icon9}/>
                <div className="stinner">
                  <div><a className="p7">Probe Condition</a></div>
                  <div><a className="p3">Good</a></div>
                </div>
              </div>
            </div>
              </div>
              <div className="btnlist">
                <div>
                    <Button className={this.state.BackgroundColor1 === "button6" ? "button6" : "button7"}
                        onClick={this.setalarm.bind(this)}><a className="p1">Set Alarm</a></Button>
                </div>
                <div>
                    <Button className={this.state.BackgroundColor2 === "button6" ? "button6" : "button7"} 
                  onClick={this.calibrate.bind(this)} variant="outlined" ><a className="p1">Calibrate</a></Button>
                </div>
                <div>
                <Button className={this.state.BackgroundColor3 === "button6" ? "button6" : "button7"} 
                  onClick={this.wifi.bind(this)} variant="outlined" ><a className="p1">Configure WiFi</a></Button>
                </div>
                <div>
                  <Button className={this.state.BackgroundColor4 === "button6" ? "button6" : "button7"} 
                  onClick={this.samplereport.bind(this)} variant="outlined" ><a className="p1">Sample’s Report</a></Button>
                </div>
                <div>
                  <Button className={this.state.BackgroundColor5 === "button6" ? "button6" : "button7"} 
                  onClick={this.factoryreset.bind(this)} variant="outlined" ><a className="p1">Factory Reset </a></Button>
                </div>
              </div>
              <div className="btnabv">
              {  
                this.state.isActiveClass1 === 'true' ?
                  <div>
                   <Set_alarm/>
                  </div>
                    :
                    <div></div>
              }
              {  
                this.state.isActiveClass2 === 'true' ?
                  <div className="container9">
                    <Calibrate/>
                  </div>
                    :
                  <div></div>
              }
              {  
                this.state.isActiveClass3 === 'true' ?
                  <div className="container10">
                    <div><a className="p8">Follow the steps to configure Wifi</a></div>
                    <div className="space2"><a className="p3">1.Go to your network settings</a></div>
                    <div className="space1"><a className="p3">2.Connect to the Device's Wi-fi Network</a></div>
                    <div className="space1"><a className="p3">3.Open IP address in your browser</a></div>
                    <div className="space1"><a className="p3">4.Connet to your new Wi-fi using the credentials</a></div>
                    <div className="space1"><a className="p3">5.Congrats you have successfully configured wifi</a></div>
                    <div className="space1"><a className="p3">6.Continue working on the dashboard</a></div>
                  </div>
                    :
                    <div></div>
              }
              {  
                this.state.isActiveClass4 === 'true' ?
                  <div className="container9">
                    <Samples_report/>
                  </div>
                    :
                    <div></div>
              }
              {  
                this.state.isActiveClass5 === 'true' ?
                <div className="container9">
                  <Factory_reset/>
                </div>
                    :
                    <div></div>
              }
              </div>
    </div>
            </div>
        </div>
        </div>
  );
}
};

export default Devices;