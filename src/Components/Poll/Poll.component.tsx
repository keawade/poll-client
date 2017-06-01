import * as React from 'react';
import './Poll.scss';

import { Progress } from 'semantic-ui-react';

interface IPollComponentProps {
  poll: IPoll;
}

const PollComponent: React.StatelessComponent<IPollComponentProps> = (props: IPollComponentProps) => {
  const results = props.poll.responseOptions.reduce((prev, curr) => ({ ...prev, [curr]: props.poll.responses.filter((res) => (res.response === curr)).length }), {});
  const max = props.poll.responseOptions.map((resOpt) => (results[resOpt])).reduce((prev, curr) => (prev > curr ? prev : curr), 0);

  return (
    <div>
      <h2>{props.poll.question}</h2>
      {props.poll.responseOptions.map((responseOption, j) => (
        <Progress
          key={j}
          value={results[responseOption]}
          total={max}
          >
          {responseOption}
        </Progress>
      ))}
    </div>
  );
};

export default PollComponent;
