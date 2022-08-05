import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed } from '../Redux/feed/feed';
import Banner from './Banner';
import Loader from './Loader';
import Section from './Section';
import '../styles/Feed.css';

const Feed = () => {
  const feedData = useSelector((state) => state.feed);
  const { loader, feeds } = feedData;
  const mainFeeds = feeds.slice(1, feeds.length);
  const dispatch = useDispatch();
  const maxRecipes = 4;

  useEffect(() => {
    if (feeds.length === 0) {
      dispatch(getFeed());
    }
  }, []);

  return (
    <div>
      { loader && <Loader /> }
      { !loader && (
        <div className="container">
          <Banner featuresRecipe={feeds[0].item} />
            {mainFeeds.map((feedItem) => (
              <Section key={feedItem.category} max={maxRecipes} feed={feedItem} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
