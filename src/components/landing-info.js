import React from 'react';
import Landing from './landing.js';
import './landing-info.css';

export default function LandingInfo(props) {
  return (
    <div className="home-page-box">
      <div className="home-information">
        <p> Sign up and log in to save your favorite heroes! Click on heroes then press save. Check your favorite heroes by clicking on the menu button!</p>
      </div>
      <Landing />
    </div>
  )
}