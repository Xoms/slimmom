import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './DiaryPage.styles';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';

const DiaryPage = () => <><DiaryProductsList /> <RightSideBar/></>;

DiaryPage.propTypes = {
  // bla: PropTypes.string,
};

DiaryPage.defaultProps = {
  // bla: 'test',
};

export default DiaryPage;
