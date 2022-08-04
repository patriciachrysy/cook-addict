import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Feed from '../components/Feed';

import store from '../Redux/ConfigureStore';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Feed /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Feed component', () => {
  render(<Provider store={store}><Feed /></Provider>);
  screen.debug();
});
