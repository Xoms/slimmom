import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <div className={styles.container}>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
