import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LoginComponent from './Login.component';

const testLogin = (username: string, password: string) => {
  // Do nothing.
  return;
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginComponent loginCallback={testLogin} />, div);
});
