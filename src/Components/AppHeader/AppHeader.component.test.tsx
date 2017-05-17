import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppHeader from './AppHeader.component';

it('renders with no data without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppHeader />, div);
});
