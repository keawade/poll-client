import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './helpers';

import AppWrapper from './AppWrapper';
import Home from './Routes/Home';
import Login from './Routes/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
    )} />
);

const AppRouter = () => (
  <BrowserRouter>
    <AppWrapper>
      <PrivateRoute exact={true} path='/' component={Home} />
      <Route path='/login' component={Login} />
    </AppWrapper>
  </BrowserRouter>
);

export default AppRouter;