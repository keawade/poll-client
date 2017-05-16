import * as React from 'react';
import './Poll.scss';

interface IPollComponentProps {
  poll: IPoll;
}

const PollComponent: React.StatelessComponent<IPollComponentProps> = (props: IPollComponentProps) => (
  <div>
    <h2>{props.poll.question}</h2>
    <ul>
      {props.poll.responseOptions.map((responseOption, j) => (
        <li key={j}>{responseOption}</li>
      ))}
    </ul>
  </div>
);

export default PollComponent;
