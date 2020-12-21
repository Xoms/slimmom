import React from "react";
import style from "./navigationbar.module.css";


const NavigationBar = () => {
  return (
    <>
      <nav>
        <div className>
              <span>Вход</span>
            </NavLink>
            <NavLink activeClassName>
              <span>Регистрация</span>
            </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;