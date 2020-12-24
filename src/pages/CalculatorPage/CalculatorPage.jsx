import React, { Component } from "react";
import RightSideBar from "../../components/RightSideBar";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import styles from "./CalculatorPage.module.scss";

class CalculatorPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <DailyCaloriesForm noModal={true} />
        <RightSideBar></RightSideBar>
      </div>
    );
  }
}

export default CalculatorPage;
