import * as React from 'react';
import { Form } from 'semantic-ui-react';
import './Login.scss';

interface ILoginPresentationProps {
  loginCallback: (username: string, password: string) => void;
  pending: boolean;
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
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input
            label='Username'
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
            width={6}
            disabled={this.props.pending}
          />
          <Form.Input
            label='Password'
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
            width={6}
            disabled={this.props.pending}
          />
          <Form.Button type='submit' loading={this.props.pending}>Login</Form.Button>
        </Form>
      </div>
    );
  }
}

export default LoginPresentation;
