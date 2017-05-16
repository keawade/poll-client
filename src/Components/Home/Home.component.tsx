import * as React from 'react';
import { clearAuth } from '../../helpers';
import './Home.scss';

import PollListComponent from '../PollList';

interface IHomePresentationProps {
  polls: IPoll[];
}

const HomePresentation: React.StatelessComponent<IHomePresentationProps> = (props: IHomePresentationProps) => (
  <div>
    <h1>Home</h1>
    <div>
      {props.polls.length <= 0 ? <div>No polls :(</div> : null}
      <PollListComponent polls={props.polls} />
    </div>
    <button onClick={clearAuth}>Logout</button>
  </div>
);

export default HomePresentation;
