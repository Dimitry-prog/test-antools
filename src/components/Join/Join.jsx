import React from 'react';
import styles from './Join.module.scss';
import searchIcon from '../../images/search.svg';

const Join = () => {
    return (
        <section className={styles.join}>
            <h2>Become a&nbsp;contributor?</h2>
            <p>Join&nbsp;us and get tips &amp;&nbsp;tricks to&nbsp;become a&nbsp;great Designer and Developer</p>
            <form>
                <input type="text" placeholder='Enter your email...'/>
                <button type='submit'>Join Us</button>
            </form>
        </section>
    );
};

export default Join;