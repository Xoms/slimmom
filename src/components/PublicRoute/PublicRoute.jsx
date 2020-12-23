import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

const PublicRoute = ({component: Componet,  isAuthorized, ...route}) => (
  <Route {...route} render={(props =>  isAuthorized && route.restricted ? <Redirect to='/diary' /> : <Componet {...props}/>  )} />
);

export default withAuth(PublicRoute);
