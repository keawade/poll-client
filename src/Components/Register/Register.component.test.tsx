import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RegisterComponent from './Register.component';

const testRegister = (username: string, displayname: string, password: string) => {
  // Do nothing.
  return;
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterComponent registerCallback={testRegister} />, div);
});
