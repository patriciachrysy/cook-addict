import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from '../components/Filter';

import store from '../Redux/ConfigureStore';


it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Router><Filter /></Router></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Filter component', () => {
  render(<Provider store={store}><Router><Filter /></Router></Provider>);
  screen.debug();
});
