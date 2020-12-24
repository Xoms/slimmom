import React, { Component } from 'react';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import SetDate from '../../components/SetDate/SetDate';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/user/userOperations';
import css from'./DiaryPage.module.scss';

class DiaryPage extends Component {
  state = {
    date: 'date',
    screenWidth: window.visualViewport.width,
  };

  componentDidMount() {
    this.props.getProducts({
      date: '2020-12-23',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //логика апдейта списка при изменении даты из стейта
  }

  changeDate = value => {
    this.setState({ date: value });
  };

  render() {
    return this.state.screenWidth < 650 ? (
      <>
        <DiaryProductsList />
        <DiaryAddProductForm date={this.state.date} mobile={true} />
        <RightSideBar />
      </>
    ) : (
      <div className={css.diarypageWrapper}>
      <div className={css.diaryWrapper}>
        <SetDate/>
        <DiaryAddProductForm mobile={false} />
        <DiaryProductsList />
      </div>
      <div className={css.sidebarWrapper}>
        <RightSideBar />
      </div>
      </div>
    );
  }
}

export default connect(null, { getProducts })(DiaryPage);
