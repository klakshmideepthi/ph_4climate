import React,{useState,useEffect,selectChange,cardSelector,Component} from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import icon1 from './images/icon1a.svg';
import icon2 from './images/icon2p.svg';
import icon3 from './images/icon3p.svg';
import {Button,Avatar} from '@material-ui/core';
import { render } from '@testing-library/react';

class Menu2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActiveClass1: 'false',
      isActiveClass2: 'true',
      isActiveClass3: 'false',
  };
};

app1()
  {
    this.setState({
      isActiveClass1: 'true',
      isActiveClass2: 'false',
      isActiveClass3: 'false',
  });
  }

  app2()
  {
    this.setState({
      isActiveClass1: 'false',
      isActiveClass2: 'true',
      isActiveClass3: 'false',
  });
  }

  app3()
  {
    this.setState({
      isActiveClass1: 'false',
      isActiveClass2: 'false',
      isActiveClass3: 'true',
  });
  }

render(){
  return (
      <div className="menu">
          <div className="iconslist">
            <div className="icons">
            <Link to='/Home' onClick={this.app1.bind(this)}>
              <Button className={this.state.isActiveClass1==='true'? this.state.BackgroundImg1 = "img11"  : this.state.BackgroundImg1 = "img12"}/>
            </Link>
              <a className="iconlabel">Home</a>
            </div>
            <div className="icons">
            <Link to='/devices' onClick={this.app2.bind(this)}>
              <Button className={this.state.isActiveClass2==='true'? this.state.BackgroundImg2 = "img21"  : this.state.BackgroundImg2 = "img22"}
                        />
            </Link>
              <a className="iconlabel">Controls</a>
            </div><div className="icons">
            <Link to='/report' onClick={this.app3.bind(this)}>
              <Button className={this.state.isActiveClass3==='true'? this.state.BackgroundImg3 = "img31"  : this.state.BackgroundImg3 = "img32"}
                        />
            </Link>
              <a className="iconlabel">Report</a>
            </div>
          </div>
          </div>
  );
}
};

export default Menu2;