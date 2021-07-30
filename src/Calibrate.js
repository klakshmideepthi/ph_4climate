import {React,Component} from 'react';
import './style.css';
import {Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';



export class Calibrate extends Component {
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
          <div><a className="p8">Calibrate Device</a></div>
          <div className="space1"><a className="p3">Do you want to calibrate your device?</a></div>
          <div className="btnlist1">
            <Button className="button8">No</Button>
            <Button className="button9"  onClick={this.continue} >Yes</Button>
          </div>
          </div>
        );
      case 2:
        return (
          <div> 
          <div><a className="p8">Calibrate Device</a></div>
          <div className="space1"><a className="p3">Things Needed</a></div>
          <div className="space2"><a className="p3">* pH Buffer Sachets 6.86 | 4.01 | 9.12</a></div>
          <div className="space2"><a className="p3">* Distilled Water</a></div>
          <div className="space2"><a className="p3">* Water Beakers</a></div>

          <div className="btnlist2">
            <Button className="button8" onClick={this.back}>Cancel</Button>
            <Button className="button9"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 3:
        return (
          <div> 
          <div><a className="p8">Calibrate Device</a>
          <a className="p3">&nbsp;&nbsp;&nbsp;&nbsp;Step 1/4</a></div>
          <div className="space1"><a className="p3">Please insert probe in pH Buffer 6.86 to begin calibrating.</a></div>    
          <div className="btnlist4">
            <Button className="button10"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 4:
        return (
          <div> 
          <div><a className="p8">Calibrate Device</a>
          <a className="p3">&nbsp;&nbsp;&nbsp;&nbsp;Step 2/4</a></div>
          <div className="space1"><a className="p3">Please insert probe in pH Buffer 6.86 to begin calibrating.</a></div>    
          <div className="btnlist4">
            <Button className="button10"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
        case 5:
        return (
          <div> 
          <div><a className="p8">Calibrate Device</a>
          <a className="p3">&nbsp;&nbsp;&nbsp;&nbsp;Step 3/4</a></div>
          <div className="space1"><a className="p3">Please insert probe in pH Buffer 6.86 to begin calibrating.</a></div>    
          <div className="btnlist4">
            <Button className="button10"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 6:
        return (
            <div> 
            <div><a className="p8">Calibrate Device</a>
            <a className="p3">&nbsp;&nbsp;&nbsp;&nbsp;Step 4/4</a></div>
            <div className="space1"><a className="p3">Please insert probe in pH Buffer 6.86 to begin calibrating.</a></div>    
            <div className="btnlist4">
              <Button className="button10"  onClick={this.continue} >Next</Button>
            </div>
            </div>
        );
        case 7:
        return (
            <div> 
            <div><a className="p9">Calibration Successful</a>
            <a className="p3">&nbsp;&nbsp;&nbsp;&nbsp;Step 4/4</a></div>
            <div className="space1"><a className="p3">Please insert probe in pH Buffer 6.86 to begin calibrating.</a></div>    
            <div className="btnlist4">
              <Link className="link3" to='/devices'><Button className="button9" >Done</Button></Link>   
            </div>
            </div>
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Calibrate;
