import * as React from 'react';
import * as Utils from '../../utils';
import './Home.scss';

import PollListComponent from '../PollList';

interface IHomePresentationProps {
  polls: IPoll[];
}

const HomePresentation: React.StatelessComponent<IHomePresentationProps> = (props: IHomePresentationProps) => (
  <div>
    <div>
      {props.polls.length <= 0 ? <div>No polls :(</div> : null}
      <PollListComponent polls={props.polls} />
    </div>
    <button onClick={Utils.clearAuth}>Logout</button>
  </div>
);

export default HomePresentation;
