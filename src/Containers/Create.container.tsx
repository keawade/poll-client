import * as React from 'react';
import CreateComponent from '../Components/Create';
import axios from 'axios';
import { History } from 'history';
import * as Utils from '../utils';

interface ICreateContainerProps {
  history: History;
}

interface ICreateContainerState {
  // No state;
}

class CreateContainer extends React.Component<ICreateContainerProps, ICreateContainerState> {
  constructor(props: ICreateContainerProps) {
    super(props);

    this.state = {};
  }

  createPoll = async (question: string, responseOptions: string[]) => {
    try {
      const token = Utils.getStoredToken();
      const response = await axios.post(`${Utils.API_URL}/poll`, { question, responseOptions }, { headers: { token } });
      this.props.history.push(`/poll/${response.data._id}`);
    } catch (err) {
      console.warn('[CreateContainer] failed to create poll', err);
    }
  }

  render() {
    return (
      <CreateComponent createCallback={this.createPoll} />
    );
  }
}

export default CreateContainer;
