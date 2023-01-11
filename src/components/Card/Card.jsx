import React from 'react';
import styles from './Card.module.scss';

const Card = ({img, name, tariff, description, small}) => {

    return (
        <li className={`${styles.card} ${small ? `${styles.card_small}` : ``}`}>
            <div className={styles.card__sun}></div>
            <div className={styles.card__top}>
                <img src={img} alt={name}/>
                <div className={styles.card__tariff}>
                    <h3>{name}</h3>
                    <span>{tariff}</span>
                </div>
            </div>
            <p className={`${styles.card__description} ${small ? `${styles.card__description_small}` : ``}`}>{description}</p>
            <div className={styles.card__footer}>
                <div className={styles.card__footer_icons}>
                    <button type='button' className={styles.card__footer_like}></button>
                    <button type='button' className={styles.card__footer_add}></button>
                </div>
                <button type='button' className={styles.card__footer_visit}>Visit</button>
            </div>
        </li>
    );
};

export default Card;