import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.styles.scss';

const NotFound = (props) => (
  <div className="NotFoundWrapper">
    404. Sorry, nothing found. 
    <Link to='/'> To home page</Link>
  </div>
);

export default NotFound;
