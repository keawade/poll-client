import * as React from 'react';

import PollFormComponent from '../Components/PollForm';

interface IPollFormContainerProps {
  // No props
}

interface IPollFormContainerState {
  question: string;
  responseOptions: string[];
}

class PollFormContainer extends React.Component<IPollFormContainerProps, IPollFormContainerState> {
  constructor(props: IPollFormContainerProps) {
    super(props);

    this.state = {
      question: '',
      responseOptions: [''],
    };
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>, responseOption?: number) => {
    if (responseOption !== undefined) {
      const tempResponseOptions = [...this.state.responseOptions];
      tempResponseOptions[responseOption] = event.currentTarget.value;
      this.setState({
        ...this.state,
        responseOptions: tempResponseOptions,
      });
    } else {
      this.setState({
        ...this.state,
        question: event.currentTarget.value,
      });
    }
  }

  render() {
    return (
      <PollFormComponent
        question={this.state.question}
        responseOptions={this.state.responseOptions}
        onChange={this.onChange}
        />
    );
  }
}

export default PollFormContainer;
