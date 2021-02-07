import React from "react";
import "./Footer.css";
import fb from "../../images/facebook-app-symbol.png";
import twitter from "../../images/twitter.png";
import ig from "../../images/instagram-logo.png";
import linkedIn from "../../images/linkedin.png";

const Footer = () => {
    return (
        // <footer class="social-links">
        //         <a href="https://facebook.com/icaminajatt" target="_blank"><img src={fb}/></a>
        //         <a href="https://twitter.com/Jathynelaaa/" target="_blank"><img src={twitter}/></a>
        //         <a href="https://instagram.com/jathynelaaa/" target="_blank"><img src={ig}/></a>
        //         <a href="https://linkedin.com/in/jatticamina" target="_blank"><img src={linkedIn}/></a>
        // </footer>
        <footer id="footer" class="slim-wrapper">
            <span>
                <h6>DON'T BE A STRANGER</h6>
                <h2>Let's connect</h2>
            </span>
            <span class="links">
                <p class="email">jatt.icamina@whitecloak.com</p>
                <ul>
                    <li>
                        <a href="https://facebook.com/icaminajatt" target="_blank" rel="noopener noreferrer"><img src={fb} alt='fb'/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Jathynelaaa/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter'/></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/jathynelaaa/" target="_blank" rel="noopener noreferrer"><img src={ig} alt='twitter'/></a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/jatticamina" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt='twitter'/></a>
                    </li>
                </ul>
            </span>
        </footer>
    )
};

export default Footer