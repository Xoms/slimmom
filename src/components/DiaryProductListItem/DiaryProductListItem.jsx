import React from "react";
import styles from "./DiaryProductListItem.module.scss";


const DiaryProductListItem = ({ title = 'баклажан', kcal = '100', weight ='100'}) => {
    
return (
    <ul className={styles.list}>
      <li className={styles.listName}>{title}</li>
      <li className={styles.listWeight}>{weight} г</li>
      <li className={styles.listCalories}>{kcal} 
      <li className={styles.ccal}> ккал</li>
      </li>
      <button className={styles.listButton}>
X
      </button>
    </ul>
  );
};

export default DiaryProductListItem;