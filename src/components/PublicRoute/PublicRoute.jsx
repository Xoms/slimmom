import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

const PublicRoute = ({component: Componet,  isAuthorized, ...route}) => (
  <Route {...route} render={(props =>  isAuthorized && route.restricted ? <Redirect to='/contacts' /> : <Componet {...props}/>  )} />
);

export default withAuth(PublicRoute);
