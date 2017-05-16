import * as React from 'react';
import './Login.scss';

interface ILoginPresentationProps {
  loginCallback: (username: string, password: string) => void;
}

interface ILoginPresentationState {
  username: string;
  password: string;
}

class LoginPresentation extends React.Component<ILoginPresentationProps, ILoginPresentationState> {
  constructor(props: ILoginPresentationProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.loginCallback(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} />
          <label>Password</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange} />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPresentation;
