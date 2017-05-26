import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './AppHeader.scss';

import * as Utils from '../../utils';

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
        <div onClick={Utils.clearAuth}>Logout</div>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default AppHeaderPresentation;
