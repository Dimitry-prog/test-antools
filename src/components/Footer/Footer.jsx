import React from 'react';
import styles from './Footer.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div  className={styles.footer__wrapper}>
                <div className={styles.footer__copyright}>
                    <Link to='/' className={styles.logo}>
                        <img src={logo} alt="logo"/>
                        <p>antools.</p>
                    </Link>
                    <h4>Copyright 2021. Antools</h4>
                    <p>Antool is&nbsp;a&nbsp;web collection of&nbsp;information on&nbsp;paid or&nbsp;free Design and Development tools</p>
                </div>
                <ul>
                    <h5>Contact Us</h5>
                    <li>
                        <Link to='/'>+621987463</Link>
                    </li>
                    <li>
                        <Link to='/'>M Building, No.10 A</Link>
                    </li>
                    <li>
                        <Link to='/'>antools@awesome.com</Link>
                    </li>
                </ul>
                <ul>
                    <h5>Categories</h5>
                    <li>
                        <Link to='/'>Design</Link>
                    </li>
                    <li>
                        <Link to='/'>Development</Link>
                    </li>
                </ul>
                <ul>
                    <h5>Company Info</h5>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Our Partners</Link>
                    </li>
                    <li>
                        <Link to='/'>Blog</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;