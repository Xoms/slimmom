import React, { Component } from "react";
import RightSideBar from "../../components/RightSideBar";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import styles from "./CalculatorPage.module.scss";
import { connect } from "react-redux";
import userSelectors from "../../redux/user/userSelectors";
import {getDailyRateWithId} from "../../redux/user/userOperations";

class CalculatorPage extends Component {
  
  componentDidMount(){
    const today = new Date().toJSON().slice(0,10);
    console.log(today)
  }

  render() {
    const {summmary} = {...this.props }
    console.log(summmary);
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
  // summmary: userSelectors.getCurrentDaySummary(state),
  summmary: userSelectors.getSummary(state),

})

const mapDispatchToProps = {
  getDailyRateWithId
}
export default connect()(CalculatorPage);
