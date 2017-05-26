import * as React from 'react';
import axios from 'axios';
import { History } from 'history';
import LoginComponent from '../Components/Login';
import * as Utils from '../utils';

interface ILoginContainerProps {
  history: History;
}

interface ILoginContainerState {
  token: string;
}

class LoginContainer extends React.Component<ILoginContainerProps, ILoginContainerState> {

  handleLogin = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${Utils.API_URL}/auth/login`, { username, password });
      Utils.setAuth(username, response.data.displayname, response.data.token);
      this.props.history.push('/');
    } catch (err) {
      console.warn('[LoginContainer] failed to authenticate', err);
    }
  }

  componentWillMount() {
    if (Utils.isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <LoginComponent loginCallback={this.handleLogin} />
    );
  }
}

export default LoginContainer;
