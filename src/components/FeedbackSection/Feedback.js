import React from 'react';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul>
      {options.map(item => (
        <li key={item.name}>
          <button type="button" onClick={onLeaveFeedback} name={item.name}>
            {item.value}
          </button>
        </li>
      ))}
    </ul>
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
