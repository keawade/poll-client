import * as React from 'react';
import PollComponent from '../Components/Poll';

import * as Utils from '../utils';
import axios from 'axios';
import { Location } from 'history';
import { Segment } from 'semantic-ui-react';

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
      const token = Utils.getStoredToken();
      const response = await axios.get(`${Utils.API_URL}/poll/${id}`, { headers: { token } });
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
        <Segment>
          <PollComponent poll={this.state.poll} />
        </Segment>
      );
    } else {
      return (
        <div>Poll does not exist</div>
      );
    }
  }
}

export default PollContainer;
