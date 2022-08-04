import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Recipe from '../components/Recipe';

import store from '../Redux/ConfigureStore';


it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Router><Recipe /></Router></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Recipe component', () => {
  render(<Provider store={store}><Router><Recipe /></Router></Provider>);
  screen.debug();
});
