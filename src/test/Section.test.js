import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from '../components/Section';

import store from '../Redux/ConfigureStore';


const data = {
    name: 'test section',
    category: 'test',
    min_items: 4,
    items: [
        {
            id: 1234,
            slug: 'test-recipe',
            thumbnail_url: 'https://test.com/test-recipe.png',
            name: 'test-recipe',
            prep_time_minutes: 5,
            num_servings: 18,
        },
        {
            id: 1235,
            slug: 'test-recipe',
            thumbnail_url: 'https://test.com/test-recipe.png',
            name: 'test-recipe',
            prep_time_minutes: 5,
            num_servings: 18,
        },
        {
            id: 1236,
            slug: 'test-recipe',
            thumbnail_url: 'https://test.com/test-recipe.png',
            name: 'test-recipe',
            prep_time_minutes: 5,
            num_servings: 18,
        },
        {
            id: 1237,
            slug: 'test-recipe',
            thumbnail_url: 'https://test.com/test-recipe.png',
            name: 'test-recipe',
            prep_time_minutes: 5,
            num_servings: 18,
        },
        {
            id: 1234,
            slug: 'test-recipe',
            thumbnail_url: 'https://test.com/test-recipe.png',
            name: 'test-recipe',
            prep_time_minutes: 5,
            num_servings: 18,
        },
    ]
  }

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Router><Section feed={data}/></Router></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Section component', () => {
  render(<Provider store={store}><Router><Section feed={data} /></Router></Provider>);
  screen.debug();
});
