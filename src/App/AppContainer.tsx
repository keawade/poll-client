import * as React from 'react';
import App from './App';

import LoginContainer from '../Containers/LoginContainer';

interface IAppContainerProps {
  // No props.
}

interface IAppContainerState {
  token: string;
}

class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
  constructor(props: IAppContainerProps) {
    super(props);

    this.state = {
      token: '',
    };
  }

  componentWillMount() {
    const token: string = localStorage.getItem('token') as string;
    if (!token) {
      console.error('unauthenticated');
    }
    this.setState({
      token,
    });
  }

  renderApp = () => {
    if (this.state.token) {
      return (
        <App />
      );
    } else {
      return (
        <LoginContainer />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderApp()}
      </div>
    );
  }
}

export default AppContainer;
