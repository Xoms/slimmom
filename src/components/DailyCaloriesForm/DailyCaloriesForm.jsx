import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getDailyRate } from "../../redux/user/userOperations";
import { connect } from "react-redux";
import Button from "../shared/Button";
import styles from "./DailyCaloriesForm.module.scss";
import Modal from "../Modal";
import globalSelectors from "../../redux/global/globalSelectors";

const formSchema = Yup.object().shape({
  height: Yup.string()
    .max(3, "Укажите значение в 3 цифры")
    .required("Обязательное поле *"),
  age: Yup.string()
    .max(2, "Укажите значение в 2 цифры")
    .required("Обязательное поле *"),
  weight: Yup.string()
    .max(3, "Укажите значение в 3 цифры")
    .required("Обязательное поле *"),
  desiredWeight: Yup.string()
    .max(3, "Укажите значение в 3 цифры")
    .required("Обязательное поле *"),
  bloodType: Yup.string().required(),
});

class DailyCaloriesForm extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  getCalculations = (values) => {
    const userCharacteristics = {
      height: +values.height,
      weight: +values.weight,
      age: +values.age,
      desiredWeight: +values.desiredWeight,
      bloodType: +values.bloodType,
    };
    this.props.getDailyRate(userCharacteristics);
    this.toggleModal();
  };

  render() {
    return (
      <div className={styles.DailyCaloriesFormWrapper}>
        <h2 className={styles.DailyCaloriesFormTitle}>
          Посчитай свою суточную норму калорий прямо сейчас
        </h2>
        <Formik
          initialValues={{
            height: "170",
            weight: "83",
            age: "26",
            desiredWeight: "75",
            bloodType: "1",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            this.getCalculations(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.DailyCaloriesForm}>
              <div className={styles.DailyCaloriesFormFieldsWrappers}>
                <div className={styles.DailyCaloriesFormFieldsWrapper}>
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
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.DailyCaloriesFormFieldsWrapper}>
                  <Field
                    name="age"
                    placeholder="Возраст *"
                    className={`${styles.DailyCaloriesFormInput} ${
                      errors.age && touched.age ? styles.errorInput : ""
                    }`}
                  />
                  <ErrorMessage
                    name="age"
                    component="p"
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.DailyCaloriesFormFieldsWrapper}>
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
                    className={styles.errorMessage}
                  />
                </div>
              </div>
              <div>
                <div className={styles.DailyCaloriesFormFieldsWrapper}>
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
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.DailyCaloriesFormBloodWrapper}>
                  <h3 className={styles.DailyCaloriesFormBloodTitle}>
                    Группа крови *
                  </h3>
                  <label
                    htmlFor="bloodType_1"
                    className={styles.DailyCaloriesFormLabel}
                  >
                    <Field
                      type="radio"
                      name="bloodType"
                      value="1"
                      className={styles.DailyCaloriesLabelField}
                    />
                    1
                  </label>
                  <label
                    htmlFor="bloodType_2"
                    className={styles.DailyCaloriesFormLabel}
                  >
                    <Field
                      type="radio"
                      name="bloodType"
                      value="2"
                      className={styles.DailyCaloriesLabelField}
                    />
                    2
                  </label>
                  <label
                    htmlFor="bloodType_3"
                    className={styles.DailyCaloriesFormLabel}
                  >
                    <Field
                      type="radio"
                      name="bloodType"
                      value="3"
                      className={styles.DailyCaloriesLabelField}
                    />
                    3
                  </label>
                  <label
                    htmlFor="bloodType_4"
                    className={styles.DailyCaloriesFormLabel}
                  >
                    <Field
                      type="radio"
                      name="bloodType"
                      value="4"
                      className={styles.DailyCaloriesLabelField}
                    />
                    4
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                className={`primary-button ${styles.DailyCaloriesFormButton}`}
              >
                Похудеть
              </Button>
            </Form>
          )}
        </Formik>
        {this.state.showModal &&
          !this.props.isLoading &&
          !this.props.noModal && (
            <Modal
              toggleModal={this.toggleModal}
              showModal={this.state.showModal}
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: globalSelectors.getLoading(state),
});

const mapDispatchToProps = {
  getDailyRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyCaloriesForm);
