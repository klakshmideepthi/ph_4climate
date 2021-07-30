import {React,Component} from 'react';
import './style.css';
import {Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




export class Factory_reset extends Component {
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
    // const { firstName, lastName, email, occupation, city, bio } = this.state;
    // const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <div> 
          <div><a className="p8">Factory Reset</a></div>
          <div className="space1"><a className="p3">Do you want to factory reset your device?</a></div>
          <div className="btnlist1">
            <Button className="button8">No</Button>
            <Button className="button9"  onClick={this.continue} >Yes</Button>
          </div>
          <div className="space1"><br/><br/><br/><a className="p10">Clicking yes will factory reset your device and will be removed from the dashboard</a></div>
          </div>
        );
      case 2:
        return (
          <div> 
          <div><a className="p8">Factory Reset</a></div>
          <div className="space1"><a className="p3">Kindly hold on as we factory reset your device</a></div>
          <div className="btnlist4">
            <Button className="button10"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 3:
        return (
          <div> 
          <div><a className="p8">Factory Reset</a></div>
          <div className="space1"><a className="p3">Factory Reset Successful</a></div>
          <div className="btnlist4">
            <Button className="button10"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 4:
        return (
          <div> 
          <div><a className="p8">Factory Reset</a></div>
          <div className="space1"><a className="p3">Removing device from dashboard</a></div>
          </div>
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Factory_reset;
