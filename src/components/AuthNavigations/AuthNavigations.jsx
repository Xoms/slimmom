import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthNavigations.module.scss';
import { NavLink } from 'react-router-dom';

const AuthNavigations = (props) => (
  <div className={styles.authnav}>
    <NavLink exact to="/diary" className={styles.link} activeClassName={styles.active}>ДНЕВНИК</NavLink>
    <NavLink exact to="/calculator" className={styles.link} activeClassName={styles.active}>КАЛЬКУЛЯТОР</NavLink>
  </div>
);

export default AuthNavigations;