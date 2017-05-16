import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomeComponent from './Home.component';

const polls: IPoll[] = [{
  question: 'What is your favorite?',
  responseOptions: ['Red', 'Green', 'Blue'],
  owner: 'keawade',
  responses: [],
  _id: '',
  createdAt: '',
}];

it('renders with no data without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeComponent polls={[]}/>, div);
});

it('renders with data without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeComponent polls={polls}/>, div);
});
