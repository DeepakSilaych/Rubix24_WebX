import React from 'react';
import styles from './Cards.module.css';

const Card = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Card;