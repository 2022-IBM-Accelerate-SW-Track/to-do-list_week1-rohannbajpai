import React, { Component } from 'react';

import './About.css'; 
import rohan from '../static/rohan.jpeg'

export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {rohan}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Rohan Bajpai</div>
          <div className="brief_description">
            Hi there! My name is Rohan and I am a computer science
            student at the University of Maryland. In my free time, I like to
            expore nature, cook, and learn new things. 
          </div>
        </div>
      </div>
    </div>  
    )
  }
}