import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import * as Utils from './utils';

import AppHeader from './Components/AppHeader';
import Home from './Routes/Home.route';
import Poll from './Routes/Poll.route';
import Login from './Routes/Login.route';
import Logout from './Routes/Logout.route';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      Utils.isAuthenticated() ? (
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
        <PrivateRoute path='/logout' component={Logout}/>
        <Route path='/login' component={Login} />
      </Container>
    </BrowserRouter>
  </div>
);

export default AppRouter;