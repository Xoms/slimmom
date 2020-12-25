import React, { Component } from "react";
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

class SetDate extends Component {
  state = {
    isShowCalendar: false,
    currentDate: new Date(),
    currentValue: new Date(),
    outputValue: '',
  };

  showCalendar = (event) => {
    console.log(event);
    this.setState((state) => {
      return {
        isShowCalendar: !state.isShowCalendar,
      };
    });
  };

  setDate = (value) => {
    const year = value.getFullYear();
    const month = value.getMonth() < 10 ?  `0${value.getMonth()+1}` : value.getMonth();
    const day = value.getDate()  < 10 ? `0${value.getDate()+1}` : value.getDate();
    this.setState((state) => {
      return {
        isShowCalendar: !state.isShowCalendar,
        currentValue: value,
        outputValue: `${day}.${month}.${year}`,
      };
    });
    // console.log(`${year}-${month}-${day}`);
    this.props.value(`${year}-${month}-${day}`);
  };

  componentDidMount(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() < 10 ?  `0${currentDate.getMonth()+1}` : currentDate.getMonth();
    const day = currentDate.getDate()  < 10 ? `0${currentDate.getDate()+1}` : currentDate.getDate();
    this.setState((state) => {
      return {
        outputValue: `${day}.${month}.${year}`,
      };
    });
  }


  render() {
    console.log(this.state);

    return (
      <div className="setdate">
        <p className="setdate-title">{`${this.state.outputValue}`}</p>
        <input
          className="setdate-btn"
          type="button"
          value=""
          onClick={this.showCalendar}
        />
        <CSSTransition
          in={this.state.isShowCalendar}
          timeout={150}
          classNames="react-calendar"
          unmountOnExit
        >
          <Calendar onChange={this.setDate} value={this.state.currentValue} />
        </CSSTransition>
      </div>
    );
  }
}

export default SetDate;


SetDate.propTypes = {
  value: PropTypes.func
};

SetDate.defaultProps = {
  value(){}
};