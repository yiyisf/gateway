import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import HomeLanding from 'app/modules/landing/landing';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFoundNotAuth from 'app/shared/error/page-not-found-not-auth';

// tslint:disable:space-in-parens
const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>
});
// tslint:enable

const RoutesNoAuth = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/" exact component={HomeLanding} />
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/reset/finish/:key?" component={PasswordResetFinish} />
      <ErrorBoundaryRoute component={PageNotFoundNotAuth} />
    </Switch>
  </div>
);

export default RoutesNoAuth;
