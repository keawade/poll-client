import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PollComponent from './Poll.component';

const poll: IPoll = {
  question: 'What is your favorite?',
  responseOptions: ['Red', 'Green', 'Blue'],
  owner: 'keawade',
  responses: [],
  _id: '',
  createdAt: '',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PollComponent poll={poll}/>, div);
});
