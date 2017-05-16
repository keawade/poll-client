import * as React from 'react';
import { History } from 'history';
import LoginPresentation from './LoginPresentation';
import { setAuth, isAuthenticated } from '../../helpers';

interface ILoginContainerProps {
  history: History;
}

interface ILoginContainerState {
  token: string;
}

class LoginContainer extends React.Component<ILoginContainerProps, ILoginContainerState> {

  handleLogin = async (username: string, password: string) => {
    try {
      const { token, displayname } = await (await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          username,
          password,
        },
      })).json();
      setAuth(username, displayname, token);
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
