import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getDailyRate } from '../../redux/user/userOperations';
import { connect } from 'react-redux';

const formSchema = Yup.object().shape({
  height: Yup.string()
    .max(3, 'max length 3 char')
    .required('Field is required!'),
  age: Yup.string().max(2, 'max length 3 char').required('Field is required!'),
  weight: Yup.string()
    .max(3, 'max length 3 char')
    .required('Field is required!'),
  desiredWeight: Yup.string()
    .max(3, 'max length 3 char')
    .required('Field is required!'),
  bloodType: Yup.string().required(),
});

class DailyCaloriesForm extends Component {
  render() {
    return (
      <div className="Wrapper">
        <h2>Узнай свою суточную норму калорий прямо сейчас</h2>
        <Formik
          initialValues={{
            height: '170',
            weight: '83',
            age: '26',
            desiredWeight: '76',
            bloodType: '1',
          }}
          validationSchema={formSchema}
          onSubmit={values => {
            const userCharacteristics = {
              height: +values.height,
              weight: +values.weight,
              age: +values.age,
              desiredWeight: +values.desiredWeight,
              bloodType: +values.bloodType,
            };
            this.props.getDailyRate(userCharacteristics);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="height"
                placeholder="Рост *"
                className={`form-control mt-2 ${
                  errors.height && touched.height ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage
                name="height"
                component="p"
                className="errorMessage"
              />
              <Field
                name="age"
                placeholder="Возраст *"
                className={`form-control mt-2 ${
                  errors.age && touched.age ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage name="age" component="p" className="errorMessage" />
              <Field
                name="weight"
                placeholder="Текущий вес *"
                className={`form-control mt-2 ${
                  errors.weight && touched.weight ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage
                name="weight"
                component="p"
                className="errorMessage"
              />
              <Field
                name="desiredWeight"
                placeholder="Желаемый вес *"
                className={`form-control mt-2 ${
                  errors.desiredWeight && touched.desiredWeight
                    ? 'is-invalid'
                    : ''
                }`}
              />
              <ErrorMessage
                name="desiredWeight"
                component="p"
                className="errorMessage"
              />
              <h3>Группа крови *</h3>
              <div>
                <label htmlFor="bloodType_1">
                  I
                  <Field type="radio" name="bloodType" value="1" />
                </label>
                <label htmlFor="bloodType_2">
                  II
                  <Field type="radio" name="bloodType" value="2" />
                </label>
                <label htmlFor="bloodType_3">
                  III
                  <Field type="radio" name="bloodType" value="3" />
                </label>
                <label htmlFor="bloodType_4">
                  IV
                  <Field type="radio" name="bloodType" value="4" />
                </label>
              </div>
              <button type="submit">Похудеть</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getDailyRate,
};

export default connect(null, mapDispatchToProps)(DailyCaloriesForm);
