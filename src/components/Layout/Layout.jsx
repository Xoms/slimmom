import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Header/>
    <div className={styles.container}>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
