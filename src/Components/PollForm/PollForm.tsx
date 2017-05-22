import * as React from 'react';
import { Form } from 'semantic-ui-react';

interface IPollFormComponentProps {
  question: string;
  responseOptions: string[];
  onChange: (event: React.SyntheticEvent<HTMLInputElement>, responseOption?: number) => void;
}

const PollFormComponent: React.StatelessComponent<IPollFormComponentProps> = (props: IPollFormComponentProps) => {
  return (
    <div>
      <Form>
        <Form.Input
          label='Question'
          value={props.question}
          onChange={(event) => props.onChange(event)}
          />
        {props.responseOptions.map((responseOption, index) => (
          <Form.Input
            label='Response'
            value={responseOption}
            onChange={(event) => props.onChange(event, index)}
            />
        ))}
      </Form>
    </div>
  );
};

export default PollFormComponent;
