import * as React from 'react';
import './PollList.scss';

import { Link } from 'react-router-dom';
import PollComponent from '../Poll';

interface IPollListPresentationProps {
  polls: IPoll[];
}

const PollListComponent: React.StatelessComponent<IPollListPresentationProps> = (props: IPollListPresentationProps) => (
  <div>
    <h1>PollList</h1>
    <div>
      {props.polls.length <= 0 ? <div>No PollLists :(</div> : null}
      {props.polls.map((poll, i) => (
        <div key={i}>
          <PollComponent poll={poll} />
          <Link to={`/poll/${poll._id}`}>View Poll</Link>
        </div>
      ))}
    </div>
  </div>
);

export default PollListComponent;
