import React, { Component } from "react"
import PropTypes from 'prop-types';
import styles from "./DiaryProductsList.module.scss"
import DiaryProductsListItem from "../DiaryProductListItem"
import {getProducts} from '../../redux/user/userOperations.js';
import selectors from '../../redux/auth/authSelectors';
// import withAuth from "../hocs/withAuth"
import { connect } from "react-redux"

const productsList = [
  {
    _id: "507f1f77bcf86cd799439011",
    categories: ["яйца"],
    weight: 100,
    title: {
      ru: "Меланж яичный",
      ua: "Меланж яєчний",
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: "507f1f77bcf86cd799439011",
    categories: ["яйца"],
    weight: 100,
    title: {
      ru: "Меланж яичный",
      ua: "Меланж яєчний",
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
]
class DiaryProductsList extends Component {
  static props = {
    getProducts: PropTypes.func.isRequired,
    date: PropTypes.string,
  }

  componentDidMount() {
    this.props.getProducts({
      date: "2020-12-23"
    });
  }

  render() {
    const { products } = this.props;

    return (
      <ul className={`${styles.productList} ${styles.scrollbar}`}>
        {products.length && products.map(
          (product => {
            console.log(product);
            return <DiaryProductsListItem 
            key={product.id} 
            name={product.title} 
            weight={product.weight} 
            cal={product.kcal} />
          })
        )}
      </ul>
    )
  }
}

const mapStateToProps =(state)=> ({
  products:  selectors.getProductsSelectors(state),
})

export default connect(mapStateToProps, { getProducts })(DiaryProductsList);