import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import notFound from './img/notFound.jpg';


const NotFound = (props) => (
  <div className="NotFoundWrapper">
    
    {/* 404. Sorry, nothing found.  */}

    {/* <button className="btn"><Link className="link" to='/'> To home page</Link></button> */}

    <h1> Oh Snap!<br/>
      Error Code : 404 not Found! <br/>
      <br/>
    <button className="btn"><Link className="link" to='/'> To home page</Link></button> 
    </h1>
    <img
    
          src={notFound}
          alt="NotFound"
          aria-label="NotFound"
          className={styles.img}
         
        /> 

 
  </div>
);

export default NotFound;
