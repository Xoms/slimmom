import React, { Component } from "react";
import RightSideBar from "../../components/RightSideBar";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import styles from "./CalculatorPage.module.scss";
import { connect } from "react-redux";
import userSelectors from "../../redux/user/userSelectors";

class CalculatorPage extends Component {
  today = new Date()
  
  render() {
    const {summmary} = {...this.props }
    console.log(this.today.toJSON().slice(0,10))
    return (
      <div className={styles.wrapper}>
        <section className={styles.DailyCaloriesSection}>
          <div className={styles.container}>
            <DailyCaloriesForm noModal={true} />
          </div>
        </section>
        <section className={styles.SideBarSection}>
          <div className={styles.sidebarContainer}>
            <RightSideBar {...summmary}/>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
  summmary: userSelectors.getDaySummary(state)
})
export default connect()(CalculatorPage);
