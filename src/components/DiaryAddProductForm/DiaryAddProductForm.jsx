import React, { Component } from 'react';
import './DiaryAddProductForm.scss';
import Button from '../shared/Button/Button';
import back from '../../img/back-arrow.svg';
import api from '../../services/backend.service';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import debounce from 'lodash.debounce';

class DiaryAddProductForm extends Component {
  state = {
    renderMarker: false,
    products: [],
    choosenProductId: '',
    error: null,
  };

  handleClick = () => {
    this.setState(prevState => {
      return { renderMarker: !prevState.renderMarker };
    });
  };

  debouncedSearch = debounce(query => {
    if (query === '') {
      return;
    }

    api
      .searchProduct(query)
      .then(({ data }) => {
        console.log(data);
        this.setState({ products: data });
        if (data.length === 1) {
          this.setState({ choosenProductId: data[0]._id });
        }
      })
      .catch(err => this.setState({ products: [], error: err.message })); //добавить обработку ошибки и её отображение вместо списка подсказок
  }, 400);

  hanleChange = ({ target }) => {
    this.debouncedSearch(target.value);
  };

  handleSubmit = ({ weight }) => {
    const product = {
      date: this.props.date,
      productId: this.state.choosenProductId,
      weight: weight,
    };

    api
      .addProduct(product)
      .then(data => console.log(data))
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    const { products } = this.state;
    const form = (
      <Formik
        initialValues={{
          weight: '',
          product: '',
        }}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
      >
        {({ setFieldValue, handleChange, handleBlur }) => (
          <Form className="modal-form">
            <Field
              onBlur={e => {
                handleBlur(e);
                setTimeout(() => {
                  this.setState({ products: [] });
                }, 300);
              }} //поставить задержку
              onChange={e => {
                handleChange(e);
                this.hanleChange(e);
              }}
              //   value={product}
              name="product"
              placeholder="Введите название продукта"
              type="text"
              autoComplete="off"
            />
            {!!products.length && (
              <ul className="autocomplete">
                {products.map(product => (
                  <li
                    key={product._id}
                    onClick={() => {
                      setFieldValue('product', product.title.ru);
                      this.setState({
                        products: [],
                        choosenProductId: product._id,
                      });
                    }}
                  >
                    {product.title.ru}
                  </li>
                ))}
              </ul>
            )}
            <Field name="weight" placeholder="Граммы" type="number" />
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
