import React,{useState,useEffect,selectChange,cardSelector,Component} from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, CardContent, CardActions, IconButton,CardHeader,Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './style.css';
import { deepOrange, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import icon5 from './images/icon5.svg';

const devices=[
  {category:'device',name:'pH Sensor1',description:'6.0',status:'Online'},
  {category:'device',name:'pH Sensor2',description:'6.5',status:'Offline'},
  {category:'device',name:'pH Sensor3',description:'4.5',status:'Online'},
  {category:'device',name:'pH Sensor4',description:'4.0',status:'Online'},
]

  

class Device extends Component {

  render(){
    

  return (
        <div className="devices">
          <div className="device1">
            <a className="h31">Devices</a>
            <Link to='/add_device'  className="link2">
              <Button className="button5" variant="outlined" ><span> +&nbsp;Add Device</span></Button>
            </Link>
          </div>
          <div className="grid1">
            <Grid container justify="center" spacing={2} className="grid2">
            {devices.filter(device => device.category).map((device, idx) => (
            <div className="device2" key={idx}>
              <Card className="cards1">
                <CardHeader
                 avatar={<Avatar className="avatar" variant="rounded">pH</Avatar>}
                action={<IconButton aria-label="settings"><MoreHorizIcon /></IconButton>}
                title={device.name}/>
                <div className="cardcontent1">
                    <div className="cardcontent2">
                      <a className="p2">{device.description}</a>
                      <a className="p1"> pH</a>
                    </div>
                    <a className="p1">Device staus: {device.status}</a>
                </div>
              </Card>
            </div> ))}
          </Grid></div>
    </div>
  );
            }
};

export default Device;