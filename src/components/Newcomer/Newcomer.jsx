import React from 'react';
import styles from './Newcomer.module.scss';
import {cardData} from '../../initData/cardData';
import Card from '../Card/Card';

const Newcomer = () => {
    const newcomerCards = cardData.slice(6);

    return (
        <section className={styles.newcomer}>
            <div className={styles.newcomer__left}>
                <h2>Newcomer Tools</h2>
                <p>Wow! see the latest update of&nbsp;the most recommended tools from reliable designers and developers</p>
                <button type='button'>Explore more</button>
            </div>
            <div className={styles.newcomer__right}>
                <ul>
                    {newcomerCards.map(card => (
                        <Card
                            key={card.id}
                            {...card}
                            small
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Newcomer;