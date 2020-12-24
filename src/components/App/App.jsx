import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userOperations';
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

const mapDispatch = {
  getCurrentUser,
};

export default connect(null, mapDispatch)(App);
