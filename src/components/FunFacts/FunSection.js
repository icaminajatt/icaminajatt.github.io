import React from 'react';
// import '../App.css';
// import { Button } from './Button';
import './FunSection.css';
import gif from "../../images/gif.gif";

function FunSection() {
  return (
    <div className = "container">
        
        <h1 className="title retain">Fun Facts</h1>
        <hr className="divider"></hr>
    
        <div className = "funRow">
                <div className = "fun-col-1">
                    <div className = "funMe">
                        <img src={gif} alt="funny" className ="pic retain"/>
                    </div>
                </div>
                
                <div className = "fun-col-2">
                    <h4>— fun facts</h4>
                    <ul>
                        <li>Life</li>
                        
                        <summary>Random Facts</summary>
                            <ul>
                                <li>Jatt undergone <i>tonsillectomy</i> when she was 4 years old.</li>
                                <li>Her eyes' grade is over 500.</li>
                                <li>She is a self-proclaimed <b>demigod</b>. <span>(Daughter of Poseidon).</span></li>
                                <li>Her dream was to become an architect and build her own house <br/> <del>but ended up graduating Electronics Engineering.</del></li>                
                            </ul>
                       

                        <br/>
                        
                        <li>School</li>
                       
                            <summary>College Days</summary>
                                <ul>
                                    <li>Jatt spent 6 years in college. <b>T_T</b></li>
                                    <li>She was a Dean's Lister before failing her major subjects in 3rd year. <i>~ehem~</i></li>
                                    <li>She once lost her scientific calculator while walking in Rizal Park.</li>
                                    <li>She won 3rd place in <i>PASUC Literary Contest</i>.</li>
                                </ul>
                        
                    </ul>
                </div>

            </div>

        </div>
   
  );
}

export default FunSection;
