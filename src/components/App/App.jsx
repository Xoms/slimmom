import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
// import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userOperations';
import {authOperations, authSelectors} from '../../redux/auth';
import globalSelectors from '../../redux/global/globalSelectors';

import routes from '../../routes';
import PublicRoute from '../PublicRoute/PublicRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import Loader from '../shared/Loader';
import Layout from '../Layout';

//style
import './App.scss';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    if(prevProps.authError !== this.props.authError) {
      this.props.refreshToken()
    }
    // if((this.props.authError && this.props.authError.toLowerCase().includes('unauthorized')) 
    // || (this.props.authError && this.props.authError.toLowerCase().includes('invalid'))) {
      
    //}
  }

  handleCheckExpToken = () => {
    // if(!this.props.accessToken) {
    //   return
    // }

    // const token = this.props.accessToken;
    // const exp = 1608901189898;
    // // const {exp} = jwt_decode(token);
    // const date = Date.now(); // Date.now() минус 5 мин до конца действия токена 
    // console.log("date", date);
    // console.log("exp", exp);
    // // console.log(Date.now() + 60000);

    // if(date > exp) {
    //   console.log("object");
    //   this.props.refreshToken()
    // }
  }

  render() {
    const routesMap = routes.map(route => {
      return route.privated ? (
        <PrivateRoute key={route.path} {...route} />
      ) : (
        <PublicRoute key={route.path} {...route} />
      );
    });

    return (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              {routesMap}
              {/* <Route component={lazy(() => import('../../pages/NotFound'))} /> */}
            </Switch>
          </Suspense>
        </Layout>
    );
  }
}

App.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authError : globalSelectors.getError(state),
  accessToken: authSelectors.getToken(state),
})
const mapDispatch = {
  getCurrentUser,
  refreshToken: authOperations.refresh
};

export default connect(mapStateToProps, mapDispatch)(App);
