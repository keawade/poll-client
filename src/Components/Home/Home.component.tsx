import * as React from 'react';
import './Home.scss';

import PollListComponent from '../PollList';

import { Message } from 'semantic-ui-react';

interface IHomePresentationProps {
  polls: IPoll[];
  message?: string;
}

const HomePresentation: React.StatelessComponent<IHomePresentationProps> = (props: IHomePresentationProps) => (
  <div>
    {props.message ? <Message positive={true}>{props.message}</Message> : null}
    <div>
      {props.polls.length <= 0 ? <div>No polls :(</div> : null}
      <PollListComponent polls={props.polls} />
    </div>
  </div>
);

export default HomePresentation;
