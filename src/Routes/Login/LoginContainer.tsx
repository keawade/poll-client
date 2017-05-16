import * as React from 'react';
import axios from 'axios';
import { History } from 'history';
import LoginPresentation from './LoginPresentation';
import { setAuth, isAuthenticated, BASE_URL } from '../../helpers';

interface ILoginContainerProps {
  history: History;
}

interface ILoginContainerState {
  token: string;
}

class LoginContainer extends React.Component<ILoginContainerProps, ILoginContainerState> {

  handleLogin = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, { username, password });
      setAuth(username, response.data.displayname, response.data.token);
      this.props.history.push('/');
    } catch (err) {
      console.warn('failed to fetch', err);
    }
  }

  componentWillMount() {
    if (isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <LoginPresentation loginCallback={this.handleLogin} />
    );
  }
}

export default LoginContainer;
