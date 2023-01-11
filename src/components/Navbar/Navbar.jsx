import React from 'react';
import styles from './Navbar.module.scss';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {menuLinks} from '../../initData/menuLinks';
import subMenuIcon from '../../images/arrowDown.svg';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.nav__logo}>
                <img src={logo} alt="logo"/>
                <p>antools.</p>
            </Link>
            <ul>
                {menuLinks.map(link => (
                    <li key={link.id}>
                        <NavLink
                            to={link.link}
                        >
                            {link.name}
                            {link.subMenu && <img src={subMenuIcon} alt='sub Menu'/>}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className={styles.nav__register}>
                <Link to='/sigin' className={styles.nav__register_signin}>Login</Link>
                <Link to='/signup' className={styles.nav__register_signup}>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;