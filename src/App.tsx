import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { isAuthenticated } from './helpers';

import AppHeader from './Components/AppHeader';
import Home from './Routes/Home.route';
import Poll from './Routes/Poll.route';
import Login from './Routes/Login.route';

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
  <div className='App'>
    <BrowserRouter>
      <Container>
        <AppHeader />
        <PrivateRoute exact={true} path='/' component={Home} />
        <PrivateRoute path='/poll/:id' component={Poll} />
        <Route path='/login' component={Login} />
      </Container>
    </BrowserRouter>
  </div>
);

export default AppRouter;