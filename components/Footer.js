import React from 'react';
import footerStyles from '../styles/Footer.module.css';

function Footer(props) {
    return (
        <div className = {footerStyles.footerContainer}>
            <div className = {footerStyles.footerCol}>
                <h2>LOURVE MUSEUM</h2>
                <div className = {footerStyles.yellowBox}>

                </div>
                <p>The Louvre is the world's largest museum and houses one of the most impressive art collections in history. The magnificent, baroque-style palace and museum — LeMusée du Louvre in French — sits along the banks of the Seine River in Paris.</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <h2>ABOUT</h2>
                <hr />
                <p>Visitor rules</p>
                <p>About Us</p>
                <p>Covid-19 Rules</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <h2>OUR WEBSITES</h2>
                <hr />
                <p>Online Tickets</p>
                <p>Collections</p>
                <p>Editions</p>
                <p>Donate Online</p>
                <p>Press</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <h2>CONTACT</h2>
                <hr />
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Give Us Your Feedback</p>
                <p>Careers</p>
                <p>Private Events and Shoots</p>
            </div>
        </div>
    );
}

export default Footer;