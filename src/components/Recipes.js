import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Section from './Section';

const Recipes = () => {
  const { category } = useParams();
  console.log(category);
  const feedData = useSelector((state) => state.feed);
  const { feeds } = feedData;
  console.log(feeds);
  const selectedfFeed = feeds.filter((feed) => {
    console.log(`the feed category is: ${feed.category}`);
    console.log(feed.category === category);
    return feed.category === category;
  });
  console.log('the selected feed');
  console.log(selectedfFeed);

  return (
    <div className="container">
      <Section
        key={selectedfFeed[0].category}
        max={selectedfFeed[0].items.length}
        feed={selectedfFeed[0]}
      />
    </div>
  );
};

export default Recipes;
