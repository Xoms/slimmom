import { connect } from 'react-redux';
import React from 'react';
import selectors from '../../redux/auth/authSelectors';
// import PropTypes from 'prop-types';
import classes from './rightSideBar.module.scss';

function RightSideBar(props) {
  const {dailyRate, percentsOfDailyRate, kcalLeft, kcalConsumed, date } = props.daySummary;
  const {notAllowedProducts} = props;

  return (
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
                <li>{kcalConsumed} ккал</li>
                <li>{dailyRate} ккал</li>
                <li>{percentsOfDailyRate} %</li>
              </ul>
            </div>
          </div>

          <div className={classes.sideBar__BlocDescription}>
            <h2 className={classes.title}>Нерекомендуемые продукты</h2>
            <div >
              {notAllowedProducts.map(product => <span>{product}, </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps =(state)=> ({
  daySummary:  selectors.getDaySummary(state),
  notAllowedProducts: selectors.getnotAllowedProducts(state),
})

export default connect(mapStateToProps)(RightSideBar);
