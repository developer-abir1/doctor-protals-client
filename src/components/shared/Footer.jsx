import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content footerBg">
      <div>
        <span className="footer-title">SERVICES</span>
        <a className="link link-hover">Emergency Checkup</a>
        <a className="link link-hover">Monthly Checkup</a>
        <a className="link link-hover">Weekly Checkup</a>
        <a className="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span className="footer-title">ORAL HEALTH</span>
        <a className="link link-hover">Fluoride Treatment</a>
        <a className="link link-hover">Cavity Filling</a>
        <a className="link link-hover">Teath Whitening</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">OUR ADDRESS</span>
        <a className="link link-hover">New York - 101010 Hudson</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
