// vj:

import React, { useState, useEffect } from 'react';
import './css/HomePage.css'; 

import InfoModal from '../InfoModal.js';
import AboutSitePage from "./about/AboutSitePage.js";

import { TypeAnimation } from 'react-type-animation';

const MainTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hello, I\'m Justin',
      ]}
      speed={30}
      cursor={false}
      style={{ 
        fontSize: '5em', 
        color: '#FFFFFF',
        fontFamily: 'Courier' 
      }}
    />
  );
}

const Subtitle = () => {
  return (
    <TypeAnimation
      sequence={[
        '',
        2500,
        'My interests include...',
        800,
        'Web Architecture...',
        1200,
        'Compiler and Language Design...',
        1200, 
        'and Full Stack Development',
        1200,
        'Enjoy the site!',
        99999
      ]}
      repeat={Infinity}
      speed={65}
      style={{ fontSize: '2em', color: '#FFFFFF', fontFamily: "Courier" }}
    />
  );
}

function HomePage() {
    return(
        <div className="page_wrapper">
            <div className="home_page">
                <div className="main_sequence">
                    <MainTitle/>
                </div>
                <div className="subtitle_sequence"> 
                    <Subtitle/>
                </div>
            </div> 
        </div>
    );
}

export default HomePage;