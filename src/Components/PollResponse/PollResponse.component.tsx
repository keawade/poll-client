import * as React from 'react';
import './PollResponse.scss';

import { Button, Form } from 'semantic-ui-react';

interface IPollResponseComponentProps {
  poll: IPoll;
  initialResponse: string;
  submit: (response: string) => void;
  pending: boolean;
}

interface IPollResponseComponentState {
  value: string;
}

class PollResponseComponent extends React.Component<IPollResponseComponentProps, IPollResponseComponentState> {
  constructor(props: IPollResponseComponentProps) {
    super(props);

    this.state = {
      value: this.props.initialResponse,
    };
  }

  selectValue = (event, { value }) => {
    this.setState({ value });
  }

  submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.submit(this.state.value);
  }

  render() {
    const { poll } = this.props;
    return (
      <Form onSubmit={this.submit} loading={this.props.pending}>
        <h2>{poll.question}</h2>
        {poll.responseOptions.map((responseOption, index) => (
          <Form.Radio
            key={index}
            label={responseOption}
            value={responseOption}
            checked={this.state.value === responseOption}
            onChange={this.selectValue}
          />
        ))}
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default PollResponseComponent;
