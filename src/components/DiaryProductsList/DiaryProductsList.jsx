import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DiaryProductsList.module.scss';
import DiaryProductsListItem from '../DiaryProductListItem';
import { getProducts } from '../../redux/user/userOperations.js';
import selectors from '../../redux/user/userSelectors';
import { connect } from 'react-redux';

class DiaryProductsList extends Component {
  static props = {
    getProducts: PropTypes.func.isRequired,
    date: PropTypes.string,
  };

  componentDidUpdate(prevProps, prevState) {}

  render() {
    let { products } = this.props;
    // if (!products) {
    //   products = [];
    // }
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  products: selectors.getProductsSelectors(state),
});

export default connect(mapStateToProps, { getProducts })(DiaryProductsList);
