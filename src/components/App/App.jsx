import React, { Component, Suspense, lazy, Fragment } from "react";
import { Route, Switch /*Redirect*/ } from "react-router-dom";

import routes from "../../routes";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

//jsx components
import Loader from "../shared/Loader";
import Decoration from "../Decoration";

//style
import "./App.scss";

class App extends Component {
  render() {
    const routesMap = routes.map((route) => {
      return route.privated ? (
        <PrivateRoute key={route.path} {...route} />
      ) : (
        <PublicRoute key={route.path} {...route} />
      );
    });

    return (
      <Fragment>
        <Decoration isLoginPage={false}/>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routesMap}
            <Route component={lazy(() => import("../../pages/NotFound"))} />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
