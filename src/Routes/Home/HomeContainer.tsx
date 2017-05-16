import * as React from 'react';
import axios from 'axios';
import HomePresentation from './HomePresentation';
import { BASE_URL, getStoredToken } from '../../helpers';

interface IHomeContainerProps {
  // No props
}

interface IHomeContainerState {
  polls: IPoll[];
}

class HomeContainer extends React.Component<IHomeContainerProps, IHomeContainerState> {
  constructor(props: IHomeContainerProps) {
    super(props);

    this.state = {
      polls: [],
    };
  }

  getUsersPolls = async () => {
    try {
      const token = getStoredToken();
      const response = await axios.get(`${BASE_URL}/poll`, { headers: { token }});
      this.setState({
        polls: response.data,
      });
    } catch (err) {
      console.warn('failed to fetch', err);
    }
  }

  componentDidMount() {
    this.getUsersPolls();
  }

  render() {
    return (
      <HomePresentation polls={this.state.polls} />
    );
  }
}

export default HomeContainer;
