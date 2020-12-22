import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getDailyRate } from "../../redux/user/userOperations";
import { connect } from "react-redux";
import Button from "../shared/Button";
import styles from "./DailyCaloriesForm.module.scss";

const formSchema = Yup.object().shape({
  height: Yup.string()
    .max(3, "max length 3 char")
    .required("Field is required!"),
  age: Yup.string().max(2, "max length 3 char").required("Field is required!"),
  weight: Yup.string()
    .max(3, "max length 3 char")
    .required("Field is required!"),
  desiredWeight: Yup.string()
    .max(3, "max length 3 char")
    .required("Field is required!"),
  bloodType: Yup.string().required(),
});

class DailyCaloriesForm extends Component {
  render() {
    return (
      <div className={styles.DailyCaloriesFormWrapper}>
        <h2 className={styles.DailyCaloriesFormTitle}>
          Посчитай свою суточную норму калорий прямо сейчас
        </h2>
        <Formik
          initialValues={{
            height: "",
            weight: "",
            age: "",
            desiredWeight: "",
            bloodType: "1",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
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
            <Form className={styles.DailyCaloriesForm}>
              <Field
                name="height"
                placeholder="Рост *"
                className={`${styles.DailyCaloriesFormInput} ${
                  errors.height && touched.height ? styles.errorInput : ""
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
                className={`${styles.DailyCaloriesFormInput} ${
                  errors.age && touched.age ? styles.errorInput : ""
                }`}
              />
              <ErrorMessage name="age" component="p" className="errorMessage" />
              <Field
                name="weight"
                placeholder="Текущий вес *"
                className={`${styles.DailyCaloriesFormInput} ${
                  errors.weight && touched.weight ? styles.errorInput : ""
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
                className={`${styles.DailyCaloriesFormInput} ${
                  errors.desiredWeight && touched.desiredWeight
                    ? styles.errorInput
                    : ""
                }`}
              />
              <ErrorMessage
                name="desiredWeight"
                component="p"
                className="errorMessage"
              />
              <h3>Группа крови *</h3>
              <div className={styles.DailyCaloriesFormBloodWrapper}>
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
              <Button type="submit" clickHandler={this.handleClick}>
                Похудеть
              </Button>
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
