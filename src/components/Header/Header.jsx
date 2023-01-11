import React from 'react';
import searchIcon from '../../images/search.svg';
import styles from './Header.module.scss';
import {socialLinks} from '../../initData/socialLinks';
import {Link} from 'react-router-dom';
import headerImg from '../../images/headerImg.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <h1>Awesome tools for Designer &amp;&nbsp;Developer<span>.</span> </h1>
                <p>Antool is&nbsp;a&nbsp;web collection of&nbsp;information on&nbsp;paid or free Design and Development tools</p>
                <form>
                    <img src={searchIcon} alt="search"/>
                    <input type="text" placeholder='find more than 430+ tools...'/>
                    <button type='submit'>Search</button>
                </form>
                <ul>
                    {socialLinks.map(social => (
                        <li key={social.id}>
                            <Link to={social.link}>
                                <img src={social.img} alt={social.name}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <img src={headerImg} alt="header bg image"/>
        </header>
    );
};

export default Header;