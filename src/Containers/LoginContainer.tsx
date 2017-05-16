import * as React from 'react';

import LoginPresentation from '../Presentations/LoginPresentation';
import { setAuth } from '../helpers';

interface ILoginContainerState {
  token: string;
}

class LoginContainer extends React.Component<{}, ILoginContainerState> {

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
    } catch (err) {
      console.warn('failed to fetch', err);
    }
  }

  render() {
    return (
      <LoginPresentation loginCallback={this.handleLogin} />
    );
  }
}

export default LoginContainer;
