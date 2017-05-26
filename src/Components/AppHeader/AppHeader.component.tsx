import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './AppHeader.scss';

interface IAppHeaderPresentationProps {
  // No state
}

const AppHeaderPresentation: React.StatelessComponent<IAppHeaderPresentationProps> = (props: IAppHeaderPresentationProps) => (
  <Menu>
    <Menu.Item>
      <NavLink to='/'>Polls</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to='/create'>Create Poll</NavLink>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <NavLink to='/logout'>Logout</NavLink>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default AppHeaderPresentation;
