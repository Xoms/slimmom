import { connect } from 'formik';
import React from 'react';
import styles from './DiaryProductListItem.module.scss';
import { deleteEatenProduct } from '../../redux/user/userOperations';

const DiaryProductListItem = ({
  name,
  cal,
  weight,
  dayId,
  productId,
  deleteProduct,
}) => {
  return (
    <li className={styles.list}>
      <span className={styles.listName}>{name}</span>
      <span className={styles.listWeight}>{weight} г</span>
      <span className={styles.listCalories}>
        {cal} <span className={styles.ccal}>ккал</span>
      </span>

      <button
        className={styles.listButton}
        onClick={() => deleteProduct({ dayId, productId })}
      >
        x
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  deleteProduct: deleteEatenProduct,
};

export default connect(null, mapDispatchToProps)(DiaryProductListItem);
