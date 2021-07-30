import {React,Component} from 'react';
import './style.css';
import {Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export class Samples_report extends Component {
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
          <div><a className="p8">Sample’s Report</a></div>
          <div className="space1"><a className="p3">Do you want to record your sample data?</a></div>
          <div className="btnlist1">
            <Button className="button8">No</Button>
            <Button className="button9"  onClick={this.continue} >Yes</Button>
          </div>
          </div>
        );
      case 2:
        return (
          <div> 
          <div><a className="p8">Sample’s Report</a></div>
          <div className="space1"><a className="p3">Enter the sample description</a></div>
          <TextField id="filled-full-width" style={{ marginleft: 4 }} placeholder="Sample Description"
          fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="filled"
          InputProps={{disableUnderline: true,}}/>
          <div className="btnlist2">
            <Button className="button8" onClick={this.back}>Cancel</Button>
            <Button className="button9"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 3:
        return (
          <div> 
          <div><a className="p8">Sample’s Report</a></div>
          <div className="space1"><a className="p3">Enter the sample ID</a></div>
          <TextField id="filled-full-width" style={{ marginleft: 4 }} placeholder="ASDS-00-00"
          fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="filled"
          InputProps={{disableUnderline: true,}}/>
          <div className="btnlist2">
            <Button className="button8" onClick={this.back}>Back</Button>
            <Button className="button9"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
      case 4:
        return (
          <div> 
          <div><a className="p8">Sample’s Report</a></div>
          <div className="space1"><a className="p3">Start recording your sample</a></div>
          <div className="btnlist3">
            <Button className="button8" onClick={this.back}>Back</Button>
            <Button className="button9"  onClick={this.continue} >Next</Button>
          </div>
          </div>
        );
        case 5:
        return (
          <div> 
          <div><a className="p8">Sample’s Report</a></div>
          <div className="space1"><a className="p3">Recording your sample data</a></div>
          <TextField id="filled-full-width" style={{ marginleft: 4 }} placeholder="Sample Description"
          fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="filled" InputProps={{
            disableUnderline: true,
          }}/>
          <div className="btnlist2">
            <Button className="button8" onClick={this.back}>Cancel</Button>
            <Button className="button9"  onClick={this.continue} >Stop</Button>
          </div>
          </div>
        );
      case 6:
        return (
          <div> 
          <div><a className="p8">Sample’s Report</a></div>
          <div className="space1"><a className="p3">Choose the file format</a></div>
          <TextField id="filled-full-width" style={{ marginleft: 4 }} placeholder="PDF"
          fullWidth margin="normal" disableUnderline={false} InputLabelProps={{shrink: true,}} variant="filled" 
          InputProps={{disableUnderline: true,}}/>
          <div className="btnlist2">
            <Button className="button9" >Generate</Button>
          </div>
          </div>
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Samples_report;
