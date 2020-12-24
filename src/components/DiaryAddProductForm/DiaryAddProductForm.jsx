import React, { Component } from 'react';
import './DiaryAddProductForm.scss';
import Button from '../shared/Button/Button';
import back from '../../img/back-arrow.svg';
import api from '../../services/backend.service';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import debounce from 'lodash.debounce';
import {CSSTransition} from 'react-transition-group';

class DiaryAddProductForm extends Component {
  state = {
    renderMarker: false,
    products: [],
    showUl: false,
  };

  handleClick = () => {
    this.setState(prevState => {
      return { renderMarker: !prevState.renderMarker };
    });
  };

  debouncedSearch = debounce(
    query =>
      api
        .searchProduct(query)
        .then(({ data }) => {
          console.log(data);
          this.setState({ products: data });
        })
        .catch(err => this.setState({ products: [] })),
    2000,
  );

  hanleChange = ({ target }) => {
    this.debouncedSearch(target.value);
    this.setState({showUl: true});
  };

  handleBlur = ({target}) => {
    this.setState({showUl: false});
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { products } = this.state;
    const form = (
      <Formik
        initialValues={{
          weight: '',
          product: '',
        }}
        onSubmit={this.handleSubmit}
      >
        {({ setFieldValue, handleChange, handleBlur }) => (
          <Form className="modal-form">
            <Field
              // onBlur={e => {
              //   handleBlur(e);
              //   this.setState({ products: [] });
              // }} поставить задержку
              onChange={e => {
                handleChange(e);
                this.hanleChange(e);
              }}
              onBlur={this.handleBlur}
              //   value={product}
              name="product"
              placeholder="Введите название продукта"
              type="text"
              autoComplete="off"
            />
            <div className="product-list-wrapper">
            <CSSTransition in={this.state.showUl} unmountOnExit classNames="search-list" timeout={500}>
            <ul className="autocomplete">
              {!!products.length &&
                products.map(product => (
                  <li
                    key={product._id}
                    onClick={() => {
                      setFieldValue('product', product.title.ru);
                      this.setState({ products: [] });
                    }}
                  >
                    {product.title.ru}
                  </li>
                ))}
            </ul>
            </CSSTransition>
            </div>
            <Field className="gramms" name="weight" placeholder="Граммы" type="number" />
            <Button type="submit" className="secondary-button">
              Добавить
            </Button>
          </Form>
        )}
      </Formik>
    );

    if (this.props.mobile) {
      return (
        <>
          <button
            type="button"
            onClick={this.handleClick}
            className="trigger-button"
          >
            +
          </button>
          {this.state.renderMarker ? (
            <div className="modal">
              <div className="button-wrapper">
                <button
                  onClick={this.handleClick}
                  type="button"
                  className="close-modal"
                >
                  <img src={back} alt="back-arrow" />
                </button>
              </div>
              {form}
            </div>
          ) : null}
        </>
      );
    } else {
      return <>{form}</>;
      // <form className="add-form">
      //   <input
      //     value={product}
      //     name="product"
      //     placeholder="Введите название продукта"
      //     type="text"
      //   />
      //   <input
      //     value={weight}
      //     name="weight"
      //     className="gramms"
      //     placeholder="Граммы"
      //     type="text"
      //   />
      //   <button type="submit" className="add-button">
      //     +
      //   </button>
      // </form>
    }
  }
}

export default DiaryAddProductForm;
