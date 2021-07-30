import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
        <Link to='/Sign_up'  className="link1">Terms & Privacy</Link>
        <Link to="/Sign_up" className="link1">Contact us</Link>
    </footer>
  );
};

export default Footer;