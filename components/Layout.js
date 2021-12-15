import React from 'react';
import styles from '../styles/Home.module.css';
import Nav from './Nav';
import Head from "next/head";
import Footer from './Footer';

function Layout({children}) {
    return (
        <div className = {styles.mainText}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Montserrat:wght@100;300;400;500&family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>
            <Nav />
            <div className = {styles.container}>
                <main className = {styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;