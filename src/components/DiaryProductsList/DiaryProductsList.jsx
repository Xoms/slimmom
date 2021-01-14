import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './DiaryProductsList.module.scss';
import DiaryProductsListItem from '../DiaryProductListItem';
import { getProducts } from '../../redux/user/userOperations.js';
import globalSelectors from '../../redux/global/globalSelectors';
import SmallLoader from '../shared/SmallLoader';
import userSelectors from '../../redux/user/userSelectors';

const DiaryProductsList = ({ products, isLoading }) => {
  return (
    <>
      <ul className={`${styles.productList} ${styles.scrollbar}`}>
        {!!products.length &&
          products.map(product => {
            return (
              <DiaryProductsListItem
                key={product.id}
                name={product.title}
                weight={product.weight}
                cal={product.kcal}
                productId={product.id}
              />
            );
          })}
      </ul>
    </>
  );
};

DiaryProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  products: userSelectors.getProductsSelectors(state),
  isLoading: globalSelectors.getLoading(state),
});

export default connect(mapStateToProps, { getProducts })(DiaryProductsList);
