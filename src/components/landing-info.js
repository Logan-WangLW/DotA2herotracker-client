import React from 'react';
import Landing from './landing.js';
import './landing-info.css';

export default function LandingInfo(props) {
  return (
    <div className="home-page-box">
      <div className="home-information">
        <p> Sign up and log in to save your favorite heroes! <br></br>Click on Add to my favorites to add to favorites. <br></br> Finally, access your favorite heroes through the menu button!</p>
      </div>
      <Landing />
    </div>
  )
}