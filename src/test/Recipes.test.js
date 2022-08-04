import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Recipes from '../components/Recipes';

import store from '../Redux/ConfigureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Recipes />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Recipes component', () => {
  render(<Provider store={store}><Router><Recipes /></Router></Provider>);
  screen.debug();
});
