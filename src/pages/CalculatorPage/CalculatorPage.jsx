import React, { Component, Fragment, Fragmetn } from "react";
import RightSideBar from "../../components/RightSideBar";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import Decoration from '../../components/Decoration';

import styles from "./CalculatorPage.module.scss";

class CalculatorPage extends Component {
  render() {
    return (
      <Fragment>
        <Decoration isCalculationPage={true}/>
        <section className="container">
          <div className={styles.wrapper}>
            <DailyCaloriesForm noModal={true} />
            <RightSideBar />
          </div>
        </section>
      </Fragment>
      //   <section className={styles.DailyCaloriesSection}>
      //     <div className={styles.container}>
      //     </div>
      //   </section>
      //   <section className={styles.SideBarSection}>
      //     <div className={styles.sidebarContainer}>
      //   </section>
      // </div>
    );
  }
}

export default CalculatorPage;
