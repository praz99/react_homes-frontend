import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-left">
      <p>
        Developed by
        <span className="name"> Prajwal Thapa</span>
      </p>
    </div>
    <div className="footer-right">
      <a className="footer-icons" aria-label="github link" href="https://github.com/praz99" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
      <a className="footer-icons" aria-label="linked-in link" href="https://linkedin.com/in/prazwal-thapa" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
      <a className="footer-icons" aria-label="twitter link" href="https://twitter.com/thapa_praz" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
    </div>
  </div>
);

export default Footer;
