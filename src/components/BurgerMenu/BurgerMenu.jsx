import React from "react";
import styles from "./BurgerMenu.module.scss";
import { NavLink } from "react-router-dom";

export const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <ul className={styles.burgerMenuList}>
        <li>
          <NavLink exact to="/dairy" className={styles.burgerMenuItemDiary}>
            ДНЕВНИК
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/calculator" className={styles.burgerMenuItemCalc}>
            КАЛЬКУЛЯТОР
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// export default BurgerMenu;