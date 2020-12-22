import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthNavigations.module.scss';
import { NavLink } from 'react-router-dom';

const AuthNavigations = (props) => (
  <div>
    <NavLink exact to="/dairy" className={styles.authNavigationsDairy}>ДНЕВНИК</NavLink>
    <NavLink exact to="/calculator" className={styles.authNavigationsCalc}>КАЛЬКУЛЯТОР</NavLink>
  </div>
);

export default AuthNavigations;