import React, {useEffect, useState} from 'react';
import styles from './Slider.module.scss';
import {sliderData} from '../../initData/sliderData';

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const nextSlide = () => {
        if (sliderIndex !== sliderData.length) {
            setSliderIndex((prev) => prev + 1)
        } else {
            setSliderIndex(0)
        }
    }

    const prevSlide = () => {
        if (sliderIndex !== 0 ) {
            setSliderIndex((prev) => prev - 1)
        } else {
            setSliderIndex(sliderData.length - 1)
        }
    }

    useEffect(() => {
        const lastSliderIndex = sliderData.length - 1;
        if(sliderIndex < 0 ) {
            setSliderIndex(lastSliderIndex)
        }
        if (sliderIndex > lastSliderIndex) {
            setSliderIndex(0)
        }
    }, [sliderIndex]);

    return (
        <section className={styles.slider}>
            <div className={styles.slider__container}>
                <button type='button' onClick={prevSlide} className={styles.slider__button_left}></button>
                <button type='button' onClick={nextSlide} className={styles.slider__button_right}></button>
                <ul>
                    {sliderData.map((slide, index) => {
                        let position = 'next'
                        if (index === sliderIndex) {
                            position = 'active'
                        }
                        if (
                            index === sliderIndex - 1 ||
                            (sliderIndex === 0 && index === sliderData.length - 1)
                        ) {
                            position = 'last'
                        }
                        return (
                            <li key={slide.id} className={`${styles.slider__item} ${sliderIndex === index ? `${styles.active}` : `${position}`}`}>
                                <div className={styles.slider__left}>
                                    <img src={slide.img} alt={slide.name}/>
                                    <div className={styles.slider__description}>
                                        <h4>{slide.name}</h4>
                                        <p>{slide.job}</p>
                                    </div>
                                </div>
                                <div className={styles.slider__right}>
                                    <p>{slide.quote}</p>
                                </div>
                            </li>)
                    })}
                </ul>
            </div>
            <ul className={styles.slider__dots}>
                {sliderData.map((dot, index) => (
                    <li
                        key={index}
                        onClick={() => setSliderIndex(index)}
                        className={`${styles.slider__dots_item} ${sliderIndex === index ?
                        `${styles.slider__dots_active}` : ``}`}
                    >

                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Slider;