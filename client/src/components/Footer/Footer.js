import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title">Contact</span>
        <a class="link link-hover">Services@pokesmart.com</a>
        <a class="link link-hover">Design@pokesmart.com</a>
        <a class="link link-hover">Marketing@pokesmart.com</a>
        <a class="link link-hover">Advertisement@pokesmart.com</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
      </div>
      <div>
        <span class="footer-title">Made By</span>

        <a class="link link-hover">Salman Web Developer</a>
      </div>
    </footer>
  );
};

export default Footer;
