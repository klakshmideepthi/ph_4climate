import {React,Component,useState} from 'react';
import './style.css';
import {Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';



export class Set_alarm extends Component {
  state = {
    step: 1,
  };

  //Proceed to next step
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
          <div  className="container9"> 
          <div><a className="p8">Set the pH Normal Range  </a></div>
          <div className="btnlist1">
            <div className="align_center">
              <div><a className="p11">Lower Limit</a></div>
              <Button className="button16">6.5</Button>
            </div>
            <div className="align_center">
              <div><a className="p11">Upper Limit</a></div>
              <Button className="button16">7.5</Button>
            </div>
            <div  className="space3"><Button className="button9" onClick={this.continue} >Next</Button></div>
          </div>
          <div className="space5"><a className="p12">Turning on will notify when value exceeds limit.</a></div>
          </div>
        );
      case 2:
        return (
          <div>
              <Dialog open>
              <div className="container14">
                    <div className="flex1">
                        <div className="space4"><a className="p8">Alert</a></div>
                        <div className="container15"><a className="p1">pH range exceeded</a></div>
                    </div>
          <div className="space1"><a className="p3">The pH value measured by pH Sensor 4 exceeded limits.</a></div>
            <Button className="button15"  onClick={this.continue} >Turn off Alarm</Button>
            </div>
          </Dialog>
          </div>
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}


export default Set_alarm;
