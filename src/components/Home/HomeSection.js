import React from 'react';

import './HomeSection.css';
import gss from "../../images/gss.png"
import { Link } from 'react-router-dom';
import Typical from 'react-typical'

function HeroSection() {
  return (
    <div className="container">
            <div className="row">
                <div className="col-1">
                    {/* <h1>-hello</h1><br></br> */}
                    <Typical
                    className = 'greet'
                    loop = {Infinity}
                    wrapper = 'p'
                    steps = {[
                        "— kumusta?",
                        1500,
                         "— hello", 
                        1500,
                        "— bonjour",
                        1500,
                        "— annyeong haseyo",
                        1500,
                        "— konnichiwa", 
                        1500,
                        "— hola",
                        1500
                    ]} />
                    <h2>I am <span>Jatt</span>.</h2><br></br>
                    <p>software engineer trainee</p><br></br><br></br>
                    <Link to="/about" className="btn">about me</Link>
                </div>
                <div className="col-2">
                    <img src={gss} className="me retain" alt="jatt"></img>
                    <div className="color-box"></div>
                </div>
            </div>
        </div>
  );
}

export default HeroSection;

