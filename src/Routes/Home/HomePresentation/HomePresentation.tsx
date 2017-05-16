import * as React from 'react';
import { clearAuth } from '../../../helpers';

const HomePresentation: React.StatelessComponent<{}> = (props: {}) => (
  <div>
    <h1>Home</h1>
    <button onClick={clearAuth}>Logout</button>
  </div>
);

export default HomePresentation;
