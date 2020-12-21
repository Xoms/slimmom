import React from 'react'
import { connect } from "react-redux";
//import { authSelectors } from '../../redux/auth';
import {withRouter} from 'react-router-dom';

const withAuth = (Wrapped) => {
    function WithAuth(props) {
        return <Wrapped {...props}/>
    }

    const mapState = state => ({
        //isAuthorized: authSelectors.getToken(state)
      })
    
    return withRouter(connect(mapState)(WithAuth))
}

export default withAuth