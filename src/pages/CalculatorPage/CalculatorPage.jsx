import React, { Component } from "react";
import RightSideBar from "../../components/RightSideBar";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import styles from "./CalculatorPage.module.scss";

class CalculatorPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <section className={styles.DailyCaloriesSection}>
          <div className={styles.container}>
            <DailyCaloriesForm noModal={true} />
          </div>
        </section>
        <section className={styles.SideBarSection}>
          <div className={styles.sidebarContainer}>
            <RightSideBar />
          </div>
        </section>
      </div>
    );
  }
}

export default CalculatorPage;
