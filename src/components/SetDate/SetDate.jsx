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
    const month = value.getMonth() || '01' ;
    const day = value.getDate() || '01';
    this.setState((state) => {
      return {
        isShowCalendar: !state.isShowCalendar,
        currentValue: value,
        outputValue: `${day}.${month}.${year}`,
      };
    });
    console.log(`${day}-${month}-${year}`);
    this.props.value(`${day}-${month}-${year}`);
  };

  componentDidMount(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() || '01' ;
    const day = currentDate.getDate() || '01';
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