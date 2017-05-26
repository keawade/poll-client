import * as React from 'react';
import axios from 'axios';
import HomeComponent from '../Components/Home';
import * as Utils from '../utils';

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
      const token = Utils.getStoredToken();
      const response = await axios.get(`${Utils.API_URL}/poll`, { headers: { token }});
      this.setState({
        polls: response.data,
      });
    } catch (err) {
      console.warn('[HomeContainer] failed to get poll list', err);
    }
  }

  componentDidMount() {
    this.getUsersPolls();
  }

  render() {
    return (
      <HomeComponent polls={this.state.polls} />
    );
  }
}

export default HomeContainer;
