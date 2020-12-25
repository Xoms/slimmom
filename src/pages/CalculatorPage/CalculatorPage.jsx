import React, { Component, Fragment } from "react";
import RightSideBar from "../../components/RightSideBar";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import Decoration from '../../components/Decoration';

import styles from "./CalculatorPage.module.scss";
import { connect } from "react-redux";
import userSelectors from "../../redux/user/userSelectors";
import {getProducts} from "../../redux/user/userOperations";

class CalculatorPage extends Component {
  
  
  componentDidMount(){
    if(!this.props.dayId){
      const today = new Date().toJSON().slice(0,10);
      this.props.getProducts({date: today})
    }
  }

  getDailyNorm(){
    console.log('current summaries item', this.props.summary);
    console.log('current day summary', this.props.daySummary);
    if(this.props.summary) {
      return  this.props.summary
    }
    return this.props.daySummary
  }

  render() {
    const dailyNorm = {...this.getDailyNorm()}
    console.log(dailyNorm);
    return (
      <Fragment>
        <Decoration isCalculationPage={true}/>
        <section className="container">
          <div className={styles.wrapper}>
            <DailyCaloriesForm noModal={true} />
            <RightSideBar {...dailyNorm} />
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

const mapStateToProps = (state)=> ({
  summmary: userSelectors.getCurrentDaySummary(state),
  //summmary: userSelectors.getSummary(state),
  dayId: userSelectors.getCurrentDayId(state),
  daySummary: userSelectors.getDaySummary(state),
  
})

const mapDispatchToProps = {
  getProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);
