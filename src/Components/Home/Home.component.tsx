import * as React from 'react';
import './Home.scss';

import PollListComponent from '../PollList';

import { Header, Message } from 'semantic-ui-react';

interface IHomePresentationProps {
  polls: IPoll[];
  message?: string;
}

const HomePresentation: React.StatelessComponent<IHomePresentationProps> = (props: IHomePresentationProps) => (
  <div>
    <Header size='huge'>Polls</Header>
    {props.message ? <Message positive={true}>{props.message}</Message> : null}
    <div>
      <PollListComponent polls={props.polls} />
    </div>
  </div>
);

export default HomePresentation;
