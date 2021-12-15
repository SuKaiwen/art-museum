import React from 'react';
import footerStyles from '../styles/Footer.module.css';

function Footer(props) {
    return (
        <div className = {footerStyles.footerContainer}>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>About Us</p>
                <hr />
                <p>NASA</p>
                <p>Our Journey</p>
                <p>Achievements</p>
                <p>Future</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>Missions</p>
                <hr />
                <p>Moon</p>
                <p>Mars</p>
                <p>Rovers</p>
                <p>Rockets</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>Security</p>
                <hr />
                <p>No Fear Act</p>
                <p>FOIA</p>
                <p>Privacy</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>Official</p>
                <hr />
                <p>Contact Us</p>
                <p>Office of Special Council</p>
                <p>Agency Financial Reports</p>
            </div>
        </div>
    );
}

export default Footer;