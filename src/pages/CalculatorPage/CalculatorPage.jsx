import React, { Component, Fragment } from 'react';
import RightSideBar from '../../components/RightSideBar';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Decoration from '../../components/Decoration';

import styles from './CalculatorPage.module.scss';
import { connect } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors';
import { getProducts } from '../../redux/user/userOperations';

class CalculatorPage extends Component {
  componentDidMount() {
    if (!this.props.dailyRate && !this.props.userDataDailyRate) {
      return;
    }

    if (!this.props.day) {
      const today = new Date().toJSON().slice(0, 10);
      this.props.getProducts({ date: today });
    } else {
      this.props.getProducts({ date: this.props.day });
    }
  }

  render() {
    return (
      <Fragment>
        <Decoration isCalculationPage={true} />
        <section className="container">
          <div className={styles.wrapper}>
            <DailyCaloriesForm noModal={true} />
            <RightSideBar />
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  day: userSelectors.getCurrentDay(state),
  dailyRate: userSelectors.getCalories(state),
  userDataDailyRate: userSelectors.getUserDataDailyRate(state),
});

const mapDispatchToProps = {
  getProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);
