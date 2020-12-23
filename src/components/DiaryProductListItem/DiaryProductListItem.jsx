import React from 'react';
import styles from './DiaryProductListItem.module.scss';

const DiaryProductListItem = ({ name, cal, weight }) => {
  return (
    <li className={styles.list}>
      <span className={styles.listName}>{name}</span>
      <span className={styles.listWeight}>{weight} г</span>
      <span className={styles.listCalories}>
        {cal} <span className={styles.ccal}>ккал</span>
      </span>

      <button className={styles.listButton}>x</button>
    </li>
  );
};

export default DiaryProductListItem;
