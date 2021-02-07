import React from 'react';
// import '../App.css';
// import { Button } from './Button';
import './AboutSection.css';
// import './useDarkMode.css';
import pr from "../../images/pr.png"
import Typical from "react-typical";

function AboutSection() {
  return (
    <div className = "container">
    <div className = "aboutRow">
        <div className = "about-col-1">
            <div className = "aboutMe">
                <img src={pr} alt="Jatt" class ="pic retain"/>
            </div>
        </div>
    
        <div className = "about-col-2">
            <h4>— about me</h4>
            {/* <h2 className="txt-rotate" data-period="2000"
            data-rotate='["Who Am I"]'></h2> */}
            {/* <h2>Who Am I</h2> */}
            <Typical
                className = 'who'
                loop = {Infinity}
                wrapper = 'p'
                steps = {[
                    "Who Am I",
                    1500,
                    "Who Am I",
                    1500
                ]} />
            <p>My name is Jatt Icamina, I'm a 22-year-old graduate of Electronics Engineering 
                and a software engineer trainee at <a href="https://www.whitecloak.com/" target="_blank" rel="noopener noreferrer">
                White Cloak Technologies Inc.</a>
            </p>

            <p>I'm interested in <span>Electronics, Machine Learning, Artificial Intelligence,
                and Web Development.</span>
            </p>

            <div className = "skills">
                <div className = "skills-col">
                    <p>HTML 5</p>
                    <div class = "stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>

                    <p>CSS 3</p>
                        <div className = "stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>

                <div className = "skills-col">
                    <p>SQL</p>
                    <div className = "stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>

                    <p>JavaScript</p>
                    <div className = "stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>

                <div className = "skills-col">
                    <p>Python</p>
                    <div className = "stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>

                    <p>MATLAB</p>
                    <div className = "stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
  );
}

export default AboutSection;
