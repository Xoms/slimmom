import React, { Component, Fragment } from 'react';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import SetDate from '../../components/SetDate/SetDate';
import Decoration from '../../components/Decoration';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/user/userOperations';
import userActions from '../../redux/user/userActions';
import userSelectors from '../../redux/user/userSelectors';
import css from './DiaryPage.module.scss';
import { Redirect } from 'react-router-dom';

class DiaryPage extends Component {
  state = {
    date: '',
    screenWidth: window.innerWidth,
  };

  componentDidMount() {
    if (this.props.currentDate) {
      this.setState({ date: this.props.currentDate });
      return;
    }
    const today = this.getCurrentDate();
    this.setState({ date: today });
  }

  componentDidUpdate(prevProps, prevState) {

    const { date } = this.state;
    if (prevState.date !== date) {
      this.props.getProducts({
        date: date,
      });
    }
  }

  getCurrentDate = () => {
    return new Date().toJSON().slice(0, 10);
  };

  changeDate = value => {
    this.setState({ date: String(value) });
    this.props.setCurrentDay(value);
  };

  render() {
    return this.props.dailyRate || this.props.userDataDailyRate ? (
      this.state.screenWidth < 650 ? (
        <Fragment>
          <Decoration isCalculationPage={true} />
          <section className="container">
            <div className={css.pageWrapper}>
              <div className={css.diarypageWrapper}>
                <SetDate
                  value={this.changeDate}
                  currentDate={this.state.date}
                />
                <DiaryProductsList />
                <DiaryAddProductForm date={this.state.date} mobile={true} />
              </div>
              <RightSideBar />
            </div>
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <Decoration isCalculationPage={true} />
          <section className="container">
            <div className={css.pageWrapper}>
              <div className={css.diarypageWrapper}>
                <SetDate value={this.changeDate} />
                <DiaryAddProductForm date={this.state.date} mobile={false} />
                <DiaryProductsList />
              </div>
              <RightSideBar />
            </div>
          </section>
        </Fragment>
      )
    ) : (
      <Redirect to="/calculator" />
    );
  }
}
const mapStateToProps = state => ({
  currentDate: userSelectors.getCurrentDay(state),
  dailyRate: userSelectors.getCalories(state),
  userDataDailyRate: userSelectors.getUserDataDailyRate(state),
});
export default connect(mapStateToProps, {
  getProducts,
  setCurrentDay: userActions.setCurrentDay,
})(DiaryPage);
