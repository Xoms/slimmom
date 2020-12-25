import { connect } from 'react-redux';
import React, { Component } from 'react';
import selectors from '../../redux/user/userSelectors';
// import PropTypes from 'prop-types';
import classes from './rightSideBar.module.scss';

class RightSideBar extends Component {
  state = {
    dailyNorm: {},
  };

  dataToRender = () => {
    const { summaries, daySummary } = this.props;
    if (summaries.length) {
      this.setState({
        dailyNorm: summaries.find(summary => summary.date === daySummary.date),
      });
    } else {
      this.setState({
        dailyNorm: daySummary,
      });
    }
  };

  // componentDidMount() {
  //   const { daySummary } = this.props;
  //   console.log(daySummary);
  //   this.setState({
  //     dailyNorm: daySummary,
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.summaries !== this.props.summaries ||
      prevProps.daySummary !== this.props.daySummary
    ) {
      console.log('я выпролнился');
      this.dataToRender();
    }
  }

  render() {
    const { notAllowedProducts } = this.props;
    const {
      date,
      kcalLeft,
      kcalConsumed,
      dailyRate,
      percentsOfDailyRate,
    } = this.state.dailyNorm;

    return (
      <>
        <section className={classes.section__rightSideBar}>
          <div className={classes.conteiner__rightSideBar}>
            <div className={classes.rightSideBar}>
              <div className={classes.backgroundSideBar}></div>
              <div className={classes.sideBar__BlocList}>
                <h2 className={classes.title}>Сводка за {date}</h2>
                <div className={classes.rightSideBar__lists}>
                  <ul className={classes.sideBar__list}>
                    <li>Осталось</li>
                    <li>Употреблено</li>
                    <li>Дневная норма</li>
                    <li>n% от нормы</li>
                  </ul>
                  <ul className={classes.sideBar__list}>
                    <li>{kcalLeft} ккал</li>
                    <li>{Math.round(kcalConsumed)} ккал</li>
                    <li>{dailyRate} ккал</li>
                    <li>{Math.round(percentsOfDailyRate)} %</li>
                  </ul>
                </div>
              </div>

              <div className={classes.sideBar__BlocDescription}>
                <h2 className={classes.title}>Нерекомендуемые продукты</h2>
                <div
                  className={`${classes.notAllowedProductsList} ${classes.scrollbar}`}
                >
                  {notAllowedProducts.map(product => (
                    <span key={product}>{product}, </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
RightSideBar.defaultProps = {
  kcalLeft: 0,
  kcalConsumed: 0,
  dailyRate: 0,
  percentsOfDailyRate: 0,
  date: new Date().toJSON().slice(0, 10),
};

const mapStateToProps = state => ({
  summaries: selectors.getSummaries(state),
  currentDayId: selectors.getCurrentDayId(state),
  // summary: selectors.getCurrentDaySummary(state),
  daySummary: selectors.getDaySummary(state),
  notAllowedProducts: selectors.getnotAllowedProducts(state),
});

export default connect(mapStateToProps)(RightSideBar);
