import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LoginPresentation from './LoginPresentation';

const testLogin = (username: string, password: string) => {
  // Do nothing.
  return;
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginPresentation loginCallback={testLogin} />, div);
});
