import React from 'react';
import styles from './Popular.module.scss';
import Card from '../Card/Card';
import {cardData} from '../../initData/cardData';

const Popular = () => {
    const popularCards = cardData.slice(0,6);

    return (
        <section className={styles.popular}>
            <h2>Most Popular Tools</h2>
            <p  className={styles.popular__text}>Tools for the best Designers and Developers most popularly used in&nbsp;the world</p>
            <ul>
                {popularCards.map(card => (
                    <Card
                        key={card.id}
                        {...card}
                    />
                ))}
            </ul>
            <button type='button' className={styles.popular__more}>
                Load more
            </button>
        </section>
    );
};

export default Popular;