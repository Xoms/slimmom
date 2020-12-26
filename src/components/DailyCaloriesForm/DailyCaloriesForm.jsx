import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  getDailyRate,
  getDailyRateWithId,
} from "../../redux/user/userOperations";
import userSelectors from "../../redux/user/userSelectors";
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
    if (!this.props.userId) {
      this.props.getDailyRate(userCharacteristics);
      this.toggleModal();
    } else {
      this.props.getDailyRateWithId(userCharacteristics, this.props.userId);
    }
  };

  render() {
    const {
      height,
      age,
      weight,
      desiredWeight,
      bloodType,
    } = this.props.userInfo;
    return (
      <div className={styles.DailyCaloriesFormWrapper}>
        <h2 className={styles.DailyCaloriesFormTitle}>
          {this.props.userId
            ? "Узнай свою суточную норму калорий"
            : "Посчитай свою суточную норму калорий прямо сейчас"}
        </h2>
        <Formik
          enableReinitialize
          initialValues={{
            height: !!height ? height : "",
            age: !!age ? age : "",
            weight: !!weight ? weight : "",
            desiredWeight: !!desiredWeight ? desiredWeight : "",
            bloodType: !!bloodType ? String(bloodType) : "1",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            this.getCalculations(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.DailyCaloriesForm}>
              <div className={styles.DailyCaloriesFormGeneralWrapper}>
                <div className={styles.DailyCaloriesFormFieldsContainer}>
                  <div className={styles.DailyCaloriesFormFieldsWrapper}>
                    <label
                      htmlFor="height"
                      className={styles.DailyCaloriesFormFieldsLabelText}
                    >
                      Рост *
                    </label>
                    <Field
                      id="height"
                      name="height"
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
                    <label
                      htmlFor="age"
                      className={styles.DailyCaloriesFormFieldsLabelText}
                    >
                      Возраст *
                    </label>
                    <Field
                      id="age"
                      name="age"
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
                    <label
                      htmlFor="weight"
                      className={styles.DailyCaloriesFormFieldsLabelText}
                    >
                      Текущий вес *
                    </label>
                    <Field
                      id="weight"
                      name="weight"
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
                    <label
                      htmlFor="desiredWeight"
                      className={styles.DailyCaloriesFormFieldsLabelText}
                    >
                      Желаемый вес *
                    </label>
                    <Field
                      id="desiredWeight"
                      name="desiredWeight"
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
                  <h3 className={styles.DailyCaloriesFormBloodTitle}>
                    Группа крови *
                  </h3>
                  <div className={styles.DailyCaloriesFormBloodWrapper}>
                    <div>
                      <Field
                        id="I"
                        type="radio"
                        name="bloodType"
                        value="1"
                        className={styles.DailyCaloriesLabelField}
                      />
                      <label
                        htmlFor="I"
                        className={styles.DailyCaloriesFormLabel}
                      >
                        1
                      </label>
                    </div>
                    <div>
                      <Field
                        id="II"
                        type="radio"
                        name="bloodType"
                        value="2"
                        className={styles.DailyCaloriesLabelField}
                      />
                      <label
                        htmlFor="II"
                        className={styles.DailyCaloriesFormLabel}
                      >
                        2
                      </label>
                    </div>
                    <div>
                      <Field
                        id="III"
                        type="radio"
                        name="bloodType"
                        value="3"
                        className={styles.DailyCaloriesLabelField}
                      />
                      <label
                        htmlFor="III"
                        className={styles.DailyCaloriesFormLabel}
                      >
                        3
                      </label>
                    </div>
                    <div>
                      <Field
                        id="IV"
                        type="radio"
                        name="bloodType"
                        value="4"
                        className={styles.DailyCaloriesLabelField}
                      />
                      <label
                        htmlFor="IV"
                        className={styles.DailyCaloriesFormLabel}
                      >
                        4
                      </label>
                    </div>
                  </div>
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
  userId: userSelectors.getUserId(state),
  userInfo: userSelectors.getUserInfo(state),
});

const mapDispatchToProps = {
  getDailyRate,
  getDailyRateWithId,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyCaloriesForm);
