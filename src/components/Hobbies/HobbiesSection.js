import React from 'react';

import './HobbiesSection.css';
import hobby from "../../images/hobby.JPG";

function HobbiesSection() {
  return (
    <div className = "container">
        
        <h1 className="title retain">Likes & Hobbies</h1>
        <hr className="divider"></hr>
    
        <div className = "likeRow">
                <div className = "like-col-1">
                    <div className = "likeMe">
                        <div className="polaroid retain">
                            <img src={hobby} alt="hobby" className ="pic"/>
                            <div className="pol-container">
                            <p>demigod diaries <br/> (* ^ ω ^)</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className = "like-col-2">
                    <h4>— hobbies</h4>
                    <ul>
                        <li>Jatt likes to spend her night writing her feelings out.</li>
                        <li>She likes to <a href="https://twitter.com/Jathynelaaa/status/1327620390584152065/photo/1" target='_blank' rel="noopener noreferrer">draw</a>. Mostly anime characters.</li>
                        <li>During her freetime, she also like to practice her <a href="https://www.instagram.com/p/B_4kMeIg_ij/" target='_blank' rel="noopener noreferrer">melodica</a> skills.</li>
                        <li>Some of her favorite anime are <i>Hunter x Hunter, Fullmetal Alchemist Brotherhood and Haikyuu.</i></li>
                        <li>She likes to read novels. One of her favorite book is Rick Riordan's The Lightning Thief.</li>
                        <li>As of the moment, she likes Han Ji Pyeong from Start up series. <i>uwu</i></li>
                        <li>She likes to sleep <b>a lot.</b></li>
                    </ul>
                </div>

            </div>
    </div>
  );
}

export default HobbiesSection;
