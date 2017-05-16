import * as React from 'react';
import PollComponent from '../Components/Poll';
import axios from 'axios';
import { API_URL, getStoredToken } from '../helpers';
import { Location } from 'history';

interface IPollContainerProps {
  location: Location;
}

interface IPollContainerState {
  poll?: IPoll;
}

class PollContainer extends React.Component<IPollContainerProps, IPollContainerState> {
  constructor(props: IPollContainerProps) {
    super(props);

    this.state = {
      poll: undefined,
    };
  }

  getPoll = async (id: string) => {
    try {
      const token = getStoredToken();
      const response = await axios.get(`${API_URL}/poll/${id}`, { headers: { token } });
      this.setState({
        poll: response.data,
      });
    } catch (err) {
      console.warn('[PollContainer] failed to get poll list', err);
    }
  }

  componentDidMount() {
    const pollId = this.props.location.pathname.split('/').pop();
    if (pollId) {
      this.getPoll(pollId);
    }
  }

  render() {
    if (this.state.poll) {
      return (
        <PollComponent poll={this.state.poll} />
      );
    } else {
      return (
        <div>Poll does not exist</div>
      );
    }
  }
}

export default PollContainer;
