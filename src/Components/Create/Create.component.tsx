import * as React from 'react';
import './Create.scss';

import { Form, Icon } from 'semantic-ui-react';

interface ICreateComponentProps {
  createCallback: (question: string, responseOptions: string[]) => void;
  pending: boolean;
}

interface ICreateComponentState {
  question: string;
  responseOptions: string[];
}

class CreatePresentation extends React.Component<ICreateComponentProps, ICreateComponentState> {
  constructor(props: ICreateComponentProps) {
    super(props);

    this.state = {
      question: '',
      responseOptions: [''],
    };
  }

  handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>, index?: number) => {
    if (index === undefined) {
      this.setState({
        ...this.state,
        question: event.currentTarget.value,
      });
    } else {
      const responseOptions = [...this.state.responseOptions];
      if (index === responseOptions.length - 1 && responseOptions[index] === '') {
        responseOptions.push('');
      }
      responseOptions[index] = event.currentTarget.value;
      this.setState({
        ...this.state,
        responseOptions: [...responseOptions]
      });
    }
  }

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.question !== '' || this.state.responseOptions.filter((res) => (res !== '')).length > 1) {
      this.props.createCallback(this.state.question, this.state.responseOptions.filter((res) => (res !== '')));
    } else {
      console.warn('[Create.component] invalid input');
    }
  }

  addResponseOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      ...this.state,
      responseOptions: [...this.state.responseOptions, ''],
    });
  }

  removeResponseOption = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    this.setState({
      ...this.state,
      responseOptions: this.state.responseOptions.filter((item, i) => (i !== index)),
    });
  }

  render() {
    const { question, responseOptions } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Input
          label='Question'
          type='text'
          name='question'
          value={question}
          onChange={(event) => this.handleInputChange(event)}
          width={6}
          disabled={this.props.pending}
        />
        {responseOptions.map((response, index) => (
          <Form.Input
            key={index}
            label={`Response ${index + 1}`}
            type='text'
            name={index}
            value={response}
            onChange={(event) => this.handleInputChange(event, index)}
            width={6}
            disabled={this.props.pending}
            icon={responseOptions.length > 1 ? (
              <Icon
                link
                name='remove circle'
                onClick={(event) => this.removeResponseOption(event, index)}
              />
            ) : null}
          />
        ))}
        <Form.Button type='button' onClick={this.addResponseOption}>Add Response</Form.Button>
        <Form.Button type='submit' loading={this.props.pending}>Create</Form.Button>
      </Form>
    );
  }
}

export default CreatePresentation;
