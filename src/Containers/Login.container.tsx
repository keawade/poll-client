import * as React from 'react';
import axios from 'axios';
import { History } from 'history';
import LoginComponent from '../Components/Login';
import RegisterComponent from '../Components/Register';
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
      Utils.setAuth(response.data.username, response.data.displayname, response.data.token);
      this.props.history.push('/', { message: 'Successfully logged in!' });
    } catch (err) {
      console.warn('[LoginContainer] failed to authenticate', err);
    }
  }

  handleRegister = async (username: string, displayname: string, password: string) => {
    try {
      const response = await axios.post(`${Utils.API_URL}/auth/register`, { username, displayname, password });
      Utils.setAuth(response.data.username, response.data.displayname, response.data.token);
      this.props.history.push('/', { message: 'Successfully registered!' });
    } catch (err) {
      console.warn('[LoginContainer] failed to register', err);
    }
  }

  componentWillMount() {
    if (Utils.isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <LoginComponent loginCallback={this.handleLogin} />
        <RegisterComponent registerCallback={this.handleRegister} />
      </div>
    );
  }
}

export default LoginContainer;
