import React, { useState, useEffect } from 'react';
import { 
  IoLocationOutline, 
  IoTimeOutline, 
  IoCallOutline, 
  IoMailOutline,
  IoCloseOutline 
} from 'react-icons/io5';

export const TopBar = () => (
  <div className="topbar">
    <div className="container">
      <address className="topbar-item">
        <div className="icon">
          <IoLocationOutline aria-hidden="true" />
        </div>
        <span className="span">
          Noida, UP 
        </span>
      </address>

      <div className="separator"></div>

      <div className="topbar-item item-2">
        <div className="icon">
          <IoTimeOutline aria-hidden="true" />
        </div>
        <span className="span">Daily : 10.00 am to 10.00 pm</span>
      </div>

      <a href="tel:+11234567890" className="topbar-item link">
        <div className="icon">
          <IoCallOutline aria-hidden="true" />
        </div>
        <span className="span">+91 123 456 7890</span>
      </a>

      <div className="separator"></div>

      <a href="mailto:vasterior@gmail.com" className="topbar-item link">
        <div className="icon">
          <IoMailOutline aria-hidden="true" />
        </div>
        <span className="span">vasterior@gmail.com</span>
      </a>
    </div>
  </div>
);

export default TopBar;