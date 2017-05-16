import * as React from 'react';

interface IAppWrapperProps {
  children: React.ReactElement<any>[];
}

const AppWrapper: React.StatelessComponent<IAppWrapperProps> = (props: IAppWrapperProps) => (
  <div className='content'>
    <div className='header'>Header</div>
    {props.children}
  </div>
);

export default AppWrapper;
