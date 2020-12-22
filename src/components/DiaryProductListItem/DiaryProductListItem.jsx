import React from "react";
import styles from "./DiaryProductListItem.module.scss";


const DiaryProductListItem = ({ title = '', ccal = '', weight =''}) => {
    
return (
  <li className={styles.list}>
  <span className={styles.listName}>{title}</span>
  <span className={styles.listWeight}>{weight} г</span>
  <span className={styles.listCalories}>{ccal} ккал</span>

  <button className={styles.listButton}>
x
      </button>
    </li>
  );
};


export default DiaryProductListItem;