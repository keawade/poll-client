import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './AppHeader.scss';

import { clearAuth } from '../../helpers';

interface IAppHeaderPresentationProps {
  // No state
}

const AppHeaderPresentation: React.StatelessComponent<IAppHeaderPresentationProps> = (props: IAppHeaderPresentationProps) => (
  <Menu>
    <Menu.Item>
      <NavLink to='/'>Polls</NavLink>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <div onClick={clearAuth}>Logout</div>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default AppHeaderPresentation;
