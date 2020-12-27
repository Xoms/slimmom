import React, { Component, Fragment } from 'react';
import RightSideBar from '../../components/RightSideBar';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Decoration from '../../components/Decoration';

import styles from './CalculatorPage.module.scss';
import { connect } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors';
import userActions from '../../redux/user/userActions';
import { getProducts } from '../../redux/user/userOperations';
import globalSelectors from '../../redux/global/globalSelectors';

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

  componentWillUnmount() {
    setTimeout(() => {
      this.props.clearNotify(); // очищает глобальный error от псевдо месседжа меседжа
    }, 3500);
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
  userDataDailyRate: userSelectors.getUserDataDailyRate(state)
  error: globalSelectors.getError(state),
  getAlertReducer: globalSelectors.getAlertReducer(state),


});

const mapDispatchToProps = {
  getProducts,
  notifyGetDailyRate: userActions.notifyGetDailyRate,
  clearNotify: userActions.clearNotify,
};
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);
