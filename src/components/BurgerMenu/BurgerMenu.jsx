import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';

export const BurgerMenu = (props) => {
  const {onClick} = props;
  return (
    <div className={styles.burgerMenu}>
      <ul className={styles.burgerMenuList}>
        <li>
          <NavLink exact to="/diary" className={styles.burgerMenuLink} activeClassName={styles.burgerMenuLinkActive} onClick={onClick}>
            ДНЕВНИК
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/calculator" className={styles.burgerMenuLink} activeClassName={styles.burgerMenuLinkActive} onClick={onClick}>
            КАЛЬКУЛЯТОР
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};