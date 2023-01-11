import React from 'react';
import styles from './Brands.module.scss';
import {brandsData} from '../../initData/brandsData';

const Brands = () => {
    return (
        <section className={styles.brands}>
            <div className={styles.brands__container}>
                <div className={styles.brands__sun}></div>
                <h3>Trusted more than 150+ brand</h3>
                <ul>
                    {brandsData.map(brand => (
                        <li key={brand.id}>
                            <img src={brand.img} alt={brand.name}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Brands;