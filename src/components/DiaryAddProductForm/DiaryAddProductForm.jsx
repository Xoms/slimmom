import React, { Component } from 'react';
import css from './DiaryAddProductForm.module.scss';
import './DiaryAddProductFormAnimation.scss';
import Button from '../shared/Button/Button';
import back from '../../img/back-arrow.svg';
import api from '../../services/backend.service';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/user/userOperations';
import { CSSTransition } from 'react-transition-group';
import SmallLoader from '../../components/shared/SmallLoader';

const AddProdSchema = Yup.object().shape({
  product: Yup.string().required('Обязательное поле *'),
  weight: Yup.number().required('Обязательное поле *'),
});

class DiaryAddProductForm extends Component {
  state = {
    renderMarker: false,
    products: [],
    choosenProductId: '',
    error: null,
    showUl: false,
    loading: false,
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
    this.setState({ choosenProductId: '' });
    api
      .searchProduct(query)
      .then(({ data }) => {
        this.setState({ products: data });
        if (data.length === 1) {
          this.setState({ choosenProductId: data[0]._id });
        }
      })
      .catch(err => this.setState({ products: [], error: err.message }));
  }, 400);

  hanleChange = ({ target }) => {
    this.setState({ showUl: true });
    this.debouncedSearch(target.value);
    this.setState({ error: null });
  };

  handleSubmit = ({ weight }) => {
    const product = {
      date: this.props.date,
      productId: this.state.choosenProductId,
      weight: weight,
    };
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
    this.props.addProduct(product);
  };

  render() {
    const { products, loading } = this.state;
    const form = (
      <Formik
        initialValues={{
          weight: '100',
          product: '',
        }}
        onSubmit={(values, initialValues) => {
          this.handleSubmit(values);
          values = initialValues;
        }}
        validationSchema={AddProdSchema}
      >
        {({ setFieldValue, handleChange, handleBlur }) => (
          <Form className={css.modalForm}>
            <label className={css.formLabel}>
              <Field
                onBlur={e => {
                  handleBlur(e);
                  this.setState({ showUl: false });
                  setTimeout(() => {
                    this.setState({ products: [] });
                  }, 300);
                }}
                onChange={e => {
                  handleChange(e);
                  this.hanleChange(e);
                }}
                name="product"
                placeholder="Введите название продукта"
                type="text"
                autoComplete="off"
              />

              <ErrorMessage
                className={css.validField}
                name="product"
                component="span"
              />
            </label>
            <div className={css.productListWrapper}>
              {!!products.length ? (
                // <CSSTransition in={this.state.showUl} unmountOnExit classNames="search-list" timeout={500}>
                <ul className={css.autocomplete}>
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
              ) : (
                // </CSSTransition>
                this.state.error && (
                  <p className={css.errorMes}>{this.state.error}</p>
                )
              )}
            </div>
            <label className={css.formLabel}>
              <Field
                className={css.gramms}
                name="weight"
                placeholder="Граммы"
                type="number"
              />
              <ErrorMessage
                className={css.validField}
                name="weight"
                component="span"
              />
            </label>
            {window.innerWidth < 650 ? (
              <Button
                type="submit"
                className={css.secondaryButton}
                disabled={loading}
              >
                Добавить
              </Button>
            ) : (
              <Button
                type="submit"
                className={css.plusButton}
                disabled={loading}
              >
                +
              </Button>
            )}
            <div className={css.SmallLoaderContainer}>
              {loading && <SmallLoader />}
            </div>
          </Form>
        )}
      </Formik>
    );

    if (this.props.mobile) {
      return (
        <>
          <div className={css.triggerButtonWrapper}>
            <button
              type="button"
              onClick={this.handleClick}
              className={css.triggerButton}
            >
              +
            </button>
          </div>
          {this.state.renderMarker ? (
            <div className={css.modal}>
              <div className={css.buttonWrapper}>
                <button
                  onClick={this.handleClick}
                  type="button"
                  className={css.closeModal}
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
    }
  }
}

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(DiaryAddProductForm);
