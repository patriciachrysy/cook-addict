import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import RecipeThumbnail from './RecipeThumbnail';
import '../styles/Section.css';

const Section = (props) => {
  const { feed, max } = props;
  const navigate = useNavigate();

  const displayCategoryRecipes = () => {
    navigate(`/recipes/${feed.category}`);
  };

  return (
    <section>
      <div className="section-title">
        <h3>
          {feed.name}
          (
          {feed.min_items}
          )
        </h3>
        { max === 4
          && (
          <button type="button" onClick={displayCategoryRecipes}>
            <BsArrowRightCircle />
          </button>
          )}
      </div>
      <div className="section-content">
        {
            feed.items.slice(0, max).map((item) => (
              <RecipeThumbnail key={item.id} recipe={item} />
            ))
            }
      </div>
    </section>
  );
};

Section.propTypes = {
  feed: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    min_items: PropTypes.number.isRequired,
    items: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
  max: PropTypes.number.isRequired,
};

export default Section;
