import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/path/to/logo.png" alt="logo" className="footer-logo" />
        <p>Blue Whale@gmail.com</p>
      </div>
      <div className="footer-right">
        <a href="/terms">이용약관</a>
        <a href="/privacy">개인정보처리방침</a>
        <a href="/service">서비스 소개</a>
      </div>
    </footer>
  );
};

export default Footer;
