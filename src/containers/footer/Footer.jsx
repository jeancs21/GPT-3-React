import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>¿Quieres saber cómo ser uno de los mejores?</h1>
            </div>
          <a href='/workTogether' className='gpt3__footer-link gpt3__footer-btn'>Let's work together</a>
          <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src='/logo.png' alt='logo' />
                    <p>SINTECN, <br />Todos los derechos reservados</p>
                </div>
                {/*<div className='gpt3__footer-links_div'>*/}
                {/*    <h4>Links</h4>*/}
                {/*    <p>Overons</p>*/}
                {/*    <p>Social Media</p>*/}
                {/*    <p>Counters</p>*/}
                {/*    <p>Contact</p>*/}
                {/*</div>*/}
                {/*<div className='gpt3__footer-links_div'>*/}
                {/*    <h4>Company</h4>*/}
                {/*    <p>Terms & Conditions</p>*/}
                {/*    <p>Privacy Policy</p>*/}
                {/*    <p>Contact</p>*/}
                {/*</div>*/}
                {/*<div className='gpt3__footer-links_div'>*/}
                {/*    <h4>Get in touch</h4>*/}
                {/*    <p>Crectherwoord K12 blablalblala</p>*/}
                {/*    <p>88908989009</p>*/}
                {/*    <p>info@payme.net</p>*/}
                {/*</div>    */}
            </div>
        </div>
    );

export default Footer;
