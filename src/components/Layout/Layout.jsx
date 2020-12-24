import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <div className={styles.container}><Header />{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
