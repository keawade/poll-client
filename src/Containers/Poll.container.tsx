import * as React from 'react';
import PollResponseComponent from '../Components/PollResponse';

import * as Utils from '../utils';
import axios from 'axios';
import { Location, History } from 'history';
import { Segment, Message } from 'semantic-ui-react';

interface IPollContainerProps {
  location: Location;
  history: History;
}

interface IPollContainerState {
  poll: IPoll;
  pending: boolean;
  initialResponse: string;
  currentUser: string;
}

class PollContainer extends React.Component<IPollContainerProps, IPollContainerState> {
  constructor(props: IPollContainerProps) {
    super(props);

    this.state = {
      poll: {} as IPoll,
      pending: false,
      initialResponse: '',
      currentUser: Utils.getCurrentUser(),
    };
  }

  getPoll = async (id: string) => {
    try {
      const token = Utils.getStoredToken();
      const currentUser = Utils.getCurrentUser();
      const response = await axios.get(`${Utils.API_URL}/poll/${id}`, { headers: { token } });
      const initialResponse = response.data.responses.filter((res) => (res.username === currentUser));
      this.setState({
        ...this.state,
        poll: response.data,
        initialResponse: initialResponse.length > 0 ? initialResponse[0].response : '',
      });
    } catch (err) {
      console.warn('[PollContainer] failed to get poll list', err);
    }
  }

  handleSubmit = async (response: string) => {
    try {
      this.setState({
        pending: true,
      });
      const token = Utils.getStoredToken();
      await axios.post(`${Utils.API_URL}/poll/${this.state.poll._id}`, { response } , { headers: { token } });
      this.setState({
        pending: false,
      });
    } catch (err) {
      this.setState({
        pending: false,
      });
      console.error('[PollContainer] failed to post response', err);
    }
  }

  componentDidMount() {
    const pollId = this.props.location.pathname.split('/').pop();
    if (pollId) {
      this.getPoll(pollId);
    }
  }

  render() {
    if (this.state.poll.question) {
      return (
        <div>
          {this.state.currentUser === this.state.poll.owner ? <Message>To share this poll, send respondents this link: <code>{window.location.href}</code></Message> : null}
          {this.state.initialResponse !== '' ? <Message success>Response recorded.</Message> : null}
          <Segment>
            <PollResponseComponent
              poll={this.state.poll}
              submit={this.handleSubmit}
              pending={this.state.pending}
              initialResponse={this.state.initialResponse}
              />
          </Segment>
        </div>
      );
    } else {
      return (
        <div>Poll does not exist</div>
      );
    }
  }
}

export default PollContainer;
