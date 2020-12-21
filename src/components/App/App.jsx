import React, {Component, Suspense, lazy} from 'react';
import { Route, Switch, /*Redirect*/ } from 'react-router-dom';

import routes from '../../routes';
import PublicRoute from '../PublicRoute/PublicRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import Loader from '../shared/Loader';

import './App.scss';

import NavigationBar from '../NavigationBar';

class App extends Component{
  render() {
    const routesMap = routes.map(route => {
      return route.privated ? <PrivateRoute key={route.path} {...route}/> : <PublicRoute key={route.path} {...route} />
      })

  return (
    <><NavigationBar/>
    <Suspense fallback={<Loader/>}>
      <Switch>
        {routesMap}
        <Route component={lazy( () => import("../../pages/NotFound") )} />
      </Switch>
  </Suspense>
  </>
    )}
};

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
