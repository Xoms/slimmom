import React from 'react';
import { connect } from 'react-redux';
import userReducer from '../../redux/user/userReducer.js';
// import PropTypes from 'prop-types';
import classes from './rightSideBar.module.scss';

function RightSideBar({ notAllowedProducts }) {
  return (
    <section className={classes.section__rightSideBar}>
      <div className={classes.conteiner__rightSideBar}>
        <div className={classes.rightSideBar}>
          <div className={classes.backgroundSideBar}></div>
          <div className={classes.sideBar__BlocList}>
            <h2 className={classes.title}>Сводка за 20.06.2020</h2>
            <div className={classes.rightSideBar__lists}>
              <ul className={classes.sideBar__list}>
                <li>Осталось</li>
                <li>Употреблено</li>
                <li>Дневная норма</li>
                <li>n% от нормы</li>
              </ul>
              <ul className={classes.sideBar__list}>
                <li>000 ккал</li>
                <li>000 ккал</li>
                <li>000 ккал</li>
                <li>000 ккал</li>
              </ul>
            </div>
          </div>

          <div className={classes.sideBar__BlocDescription}>
            <h2 className={classes.title}>Нерекомендуемые продукты</h2>
            <p>Здесь будет отображаться Ваш рацион</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  notAllowedProducts: userReducer.initialState.notAllowedProducts(state),
});

export default connect(mapStateToProps)(RightSideBar);
