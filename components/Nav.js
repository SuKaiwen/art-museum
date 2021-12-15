

import React from 'react';
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

function Nav(props) {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.navLogo}>LOURVE</div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="/">Visiting</Link>
                </li>
                <li>
                    <Link href="/">Exhibitions</Link>
                </li>
                <li>
                    <Link href="/">News</Link>
                </li>
            </ul>
            <div className={navStyles.navLogo}>Contact Us</div>
        </nav>
    );
}

export default Nav;