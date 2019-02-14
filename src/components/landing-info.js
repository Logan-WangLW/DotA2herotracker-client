import React from 'react';
import Landing from './landing.js';
import './landing-info.css';

export default function LandingInfo(props) {
  return (
    <div className="home-page-box">
      <div className="home-information">
        <p> This is a Dota 2 Hero Tracker! find out more about the game here: <a href="https://www.dota2.com/play/" target="_blank" rel="noopener noreferrer"> DotA2</a>
          <br></br>
          <br></br>Sign up and log in to save your favorite heroes
          <br></br>On log in you'll be redirected to the heroes list where you can click on the star to favorite a hero
          <br></br>Access your favorite heroes through My Favorites button
          <br></br>Click on More Info for more details on the hero or Remove to remove the hero from your Favorites
          <br></br>
          <br></br>Demo account:
          <br></br>Username: user1
          <br></br>Password: password
        </p>
      </div>
      <Landing />
    </div>
  )
}