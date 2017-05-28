import * as React from 'react';
import './PollList.scss';

import { Link } from 'react-router-dom';
import PollComponent from '../Poll';
import { Segment } from 'semantic-ui-react';

interface IPollListPresentationProps {
  polls: IPoll[];
}

const PollListComponent: React.StatelessComponent<IPollListPresentationProps> = (props: IPollListPresentationProps) => (
  <div>
    {props.polls.length <= 0 ? (
      <Segment>
        <p>It looks like you don't have any polls yet. Why not <Link to='/create'>create</Link> one?</p>
      </Segment>
    ) : null}
    {props.polls.map((poll, i) => (
      <Segment key={i}>
        <PollComponent poll={poll} />
        <Link to={`/poll/${poll._id}`}>View Poll</Link>
      </Segment>
    ))}
  </div>
);

export default PollListComponent;
