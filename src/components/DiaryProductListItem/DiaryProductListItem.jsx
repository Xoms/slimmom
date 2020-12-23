import { connect } from "formik";
import React from "react";
import styles from "./DiaryProductListItem.module.scss";
import {deleteEatenProduct} from "../../redux/user/userOperations";


const DiaryProductListItem = ({ title, ccal, weight, dayId, productId, deleteProduct }) => {

    
return (
  <li className={styles.list}>
  <span className={styles.listName}>{title}</span>
  <span className={styles.listWeight}>{weight} г</span>
  <span className={styles.listCalories}>{ccal} ккал</span>

  <button className={styles.listButton} onClick={() => deleteProduct({dayId, productId})}>
x
      </button>
    </li>
  );
};

const mapDispatchToProps = {
deleteProduct: deleteEatenProduct,
}

export default connect(null, mapDispatchToProps)(DiaryProductListItem);