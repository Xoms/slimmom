import { connect } from 'react-redux';
import React from 'react';
import selectors from '../../redux/user/userSelectors';
// import PropTypes from 'prop-types';
import classes from './rightSideBar.module.scss';

function RightSideBar(props) {
  
  const { notAllowedProducts, daySummary, summary } = props;
  
  const dailyNorm = summary ? summary : daySummary;
  
  const {date, kcalLeft,  kcalConsumed, dailyRate, percentsOfDailyRate} = dailyNorm
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
RightSideBar.defaultProps = {
  kcalLeft: 0,
  kcalConsumed: 0,
  dailyRate: 0,
  percentsOfDailyRate: 0,
  date: new Date().toJSON().slice(0,10),
}

const mapStateToProps = state => ({
  summary: selectors.getCurrentDaySummary(state),
  daySummary: selectors.getDaySummary(state),
  notAllowedProducts: selectors.getnotAllowedProducts(state),
});

export default connect(mapStateToProps)(RightSideBar);
