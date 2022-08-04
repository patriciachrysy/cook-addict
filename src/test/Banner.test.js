import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from '../components/Banner';

import store from '../Redux/ConfigureStore';


const data = {
    id: 1234,
    slug: 'test-recipe',
    thumbnail_url: 'https://test.com/test-recipe.png',
    name: 'test-recipe',
    prep_time_minutes: 5,
    num_servings: 18,
  }

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Router><Banner featuresRecipe={data}/></Router></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Banner component', () => {
  render(<Provider store={store}><Router><Banner featuresRecipe={data} /></Router></Provider>);
  screen.debug();
});
