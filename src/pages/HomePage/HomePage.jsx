import React from 'react';
// import PropTypes from 'prop-types';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

//styles
import styles from './HomePage.module.scss';

const HomePage = () => {
 return (
   <section className={`container ${styles.homePage}`}>
     <DailyCaloriesForm />
   </section>
  )
};

HomePage.propTypes = {
  // bla: PropTypes.string,
};

HomePage.defaultProps = {
  // bla: 'test',
};

export default HomePage; 
