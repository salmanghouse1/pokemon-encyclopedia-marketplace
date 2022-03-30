import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover">Services@pokesmart.com</a>
        <a className="link link-hover">Design@pokesmart.com</a>
        <a className="link link-hover">Marketing@pokesmart.com</a>
        <a className="link link-hover">Advertisement@pokesmart.com</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Made By</span>

        <a className="link link-hover">Salman Web Developer</a>
      </div>
    </footer>
  );
};

export default Footer;
