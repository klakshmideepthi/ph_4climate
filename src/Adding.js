
import {React,Component} from 'react';
import './style.css';
import {Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import pic1 from './images/Group 552.svg';
import pic2 from './images/pic4.svg';
import pic3 from './images/pic6.svg';
import pic4 from './images/success1.svg';

export class Adding extends Component {
  state = {
    step: 1,
  };

  

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.prevStep();
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div>       
              <div className="container12">
                  <img  className="barcode1" src={pic1}/>
              </div>
              <div className="container13">
                  <div><a className="p3">Turn to the back of the device to find the product ID</a></div>
              <div><a className="p8">Enter Product ID</a></div>
              <TextField id="filled-full-width" style={{ marginleft: 4 }} placeholder="ASDS-00-00"
                     variant="filled" InputProps={{disableUnderline: true,}}/>
                     <div><a className="p11">You're good to go</a></div>
              </div>
              <div className="btnlist5">
            <Button className="button11" onClick={this.back}>Cancel</Button>
            <Button className="button12"  onClick={this.continue} >Next</Button>
          </div>          
          </div>
        );
      case 2:
        return (
          <div> 
          <div className="container12">
                  <img  className="barcode1" src={pic1}/>
              </div>
              <div className="container13">
                  <div className="space1"><a className="p3">Make sure your device is turned on</a></div>
              <div className="space3"><a className="p8">Connecting</a></div>
              <img  className="space1" src={pic2}/>
              </div>
              <div className="btnlist5">
            <Button className="button11" onClick={this.back}>Cancel</Button>
            <Button className="button13"  onClick={this.continue} >Next</Button>
          </div>  
          </div>
        );
      case 3:
        return (
            <div>       
                <div className="container12">
                  <img  className="barcode1" src={pic3}/>
              </div>
            <div className="container13">
                <div className="space1"><a className="p3">Organize your devices better with color codes</a></div>
            <div className="space3"><a className="p8">Enter Device Name</a></div>
            <TextField id="filled-full-width" style={{ marginleft: 4 }} placeholder="ASDS-00-00"
                   variant="filled" InputProps={{disableUnderline: true,}}/>
            </div>
            <div className="btnlist5">
          <Button className="button11" onClick={this.back}>Cancel</Button>
          <Button className="button12"  onClick={this.continue} >Next</Button>
        </div>          
        </div>
        );
      case 4:
        return (
          <div className="text_center"> 
              <div className="success1"><img src={pic4}/></div>
          <div><a className="p9">Successful!</a></div>
          <div className="space1"><a className="p3">Your device has been added successfully</a></div>
          <div className="btnlist6">
          <Link className="link3" to='/Home'><Button className="button14" >Next</Button></Link>          
          </div>
          </div>
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Adding;