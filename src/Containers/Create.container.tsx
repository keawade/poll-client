import * as React from 'react';
import CreateComponent from '../Components/Create';
import axios from 'axios';
import { History } from 'history';
import * as Utils from '../utils';

interface ICreateContainerProps {
  history: History;
}

interface ICreateContainerState {
  pendingCreate: boolean;
}

class CreateContainer extends React.Component<ICreateContainerProps, ICreateContainerState> {
  constructor(props: ICreateContainerProps) {
    super(props);

    this.state = {
      pendingCreate: false,
    };
  }

  createPoll = async (question: string, responseOptions: string[]) => {
    try {
      this.setState({
        pendingCreate: true,
      });
      const token = Utils.getStoredToken();
      const response = await axios.post(`${Utils.API_URL}/poll`, { question, responseOptions }, { headers: { token } });
      this.props.history.push(`/poll/${response.data._id}`);
    } catch (err) {
      console.warn('[CreateContainer] failed to create poll', err);
      this.setState({
        pendingCreate: false,
      });
    }
  }

  render() {
    return (
      <CreateComponent createCallback={this.createPoll} pending={this.state.pendingCreate} />
    );
  }
}

export default CreateContainer;
