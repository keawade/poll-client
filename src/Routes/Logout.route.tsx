import * as React from 'react';
import { History } from 'history';
import * as Utils from '../utils';

interface ILogoutRouteProps {
  history: History;
}

class Logout extends React.Component<ILogoutRouteProps, {}> {
  constructor(props: ILogoutRouteProps) {
    super(props);

    Utils.clearAuth();
  }

  render() {
    return (
      <div>Goodbye!</div>
    );
  }
}

export default Logout;
