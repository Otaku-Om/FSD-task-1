import React from 'react';
import "./footer.css";
import Links from "../../assets/links.png"

function Footer() {
  return (
    <footer className='footer section__padding'>
      <div className="left">
         <h1 className="logo">Logo</h1>
      </div>
      <div className="right">
         <span>Contact@00000000.tech</span>
         <img src={Links} alt="links" />
      </div>
    </footer>
  )
}

export default Footer
