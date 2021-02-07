import React from 'react';
// import '../App.css';
// import { Button } from './Button';
import './WorkSection.css';
import catchall from "../../images/catchall.jpg";

function WorkSection() {
  return (
    <div className = "container">
        
        <h1 className="title retain">Work Experience</h1>
        <hr className="divider"></hr>
    
        <div className = "workRow">
            <div className = "work-col-1">
                <div className = "workMe">
                    <img src={catchall} alt="catchall" className ="pic retain"/>
                </div>
            </div>
                    
            <div className = "work-col-2">
                <h4>— research assistant</h4>
                    <h2><b>FASTRAC: CATCH-ALL:</b> Vision-Based Artificial Analytics Software
                    Development for Traffic and Transport Applications</h2>
                    <p><a href="https://catchall.ai" target='_blank' rel="noopener noreferrer">CATCH-ALL</a> is a system that makes use of <i>Artificial Intelligence (AI)</i> assisted
                    and <br></br> CCTV-Based Non-Contact Operations in the monitoring, detecting
                    and report  generation of traffic violations on the road. <br></br> <i>CATCH-ALL is a DOST Funded 
                    Research based in De La Salle University.</i></p>

                    <a href="https://www.facebook.com/UNTVNewsRescue/videos/2108161702819385">UNTV interviewed Catch-all.</a>
            </div>

        </div>
    </div>
  );
}

export default WorkSection;
