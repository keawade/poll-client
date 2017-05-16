import * as React from 'react';
import { clearAuth } from '../../../helpers';

interface IHomePresentationProps {
  polls: IPoll[];
}

const HomePresentation: React.StatelessComponent<IHomePresentationProps> = (props: IHomePresentationProps) => (
  <div>
    <h1>Home</h1>
    <div>
      {props.polls.length <= 0 ? <div>No polls :(</div> : null}
      {props.polls.map((poll, i) => (
        <div key={i}>
          <h2>{poll.question}</h2>
          <ul>
            {poll.responseOptions.map((responseOption, j) => (
              <li key={j}>{responseOption}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <button onClick={clearAuth}>Logout</button>
  </div>
);

export default HomePresentation;
