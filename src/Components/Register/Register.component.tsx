import * as React from 'react';
import { Form } from 'semantic-ui-react';
import './Register.scss';

interface IRegisterPresentationProps {
  registerCallback: (username: string, displayname: string, password: string) => void;
}

interface IRegisterPresentationState {
  username: string;
  displayname: string;
  password: string;
}

class RegisterPresentation extends React.Component<IRegisterPresentationProps, IRegisterPresentationState> {
  constructor(props: IRegisterPresentationProps) {
    super(props);

    this.state = {
      username: '',
      displayname: '',
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
    const { username, displayname, password } = this.state;
    if (
      (password.length >= 8) ||
      password.match(new RegExp(/[a-z]/, 'g')) ||
      password.match(new RegExp(/[A-Z]/, 'g')) ||
      password.match(new RegExp(/[0-9]/, 'g'))
    ) {
      this.props.registerCallback(username, displayname, password);
    }
  }

  render() {
    const { username, displayname, password } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input
            label='User Name'
            type='text'
            name='username'
            value={username}
            onChange={this.handleInputChange}
            width={6}
          />
          <Form.Input
            label='Display Name'
            type='text'
            name='displayname'
            value={displayname}
            onChange={this.handleInputChange}
            width={6}
          />
          <Form.Input
            label='Password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleInputChange}
            width={6}
            error={
              !(password.length >= 8) ||
              !password.match(new RegExp(/[a-z]/, 'g')) ||
              !password.match(new RegExp(/[A-Z]/, 'g')) ||
              !password.match(new RegExp(/[0-9]/, 'g'))
            }
          />
          <Form.Button type='submit'>Register</Form.Button>
        </Form>
      </div>
    );
  }
}

export default RegisterPresentation;
