import React from 'react';
import RightSideBar from '../RightSideBar/RightSideBar';

import './App.scss';

const App = props => (
  <div className="AppWrapper">
    <RightSideBar></RightSideBar>
  </div>
);

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
