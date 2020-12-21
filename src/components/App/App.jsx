import React from 'react';
import UserInfo from '../UserInfo';

import './App.scss';

const App = (props) => (
  <div className="AppWrapper">
    <UserInfo userName='Nic' />
  </div>
);

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
