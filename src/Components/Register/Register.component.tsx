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
    this.props.registerCallback(this.state.username, this.state.displayname, this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input
            label='User Name'
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
            width={6}
          />
          <Form.Input
            label='Display Name'
            type='text'
            name='displayname'
            value={this.state.displayname}
            onChange={this.handleInputChange}
            width={6}
          />
          <Form.Input
            label='Password'
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
            width={6}
          />
          <Form.Button type='submit'>Register</Form.Button>
        </Form>
      </div>
    );
  }
}

export default RegisterPresentation;
