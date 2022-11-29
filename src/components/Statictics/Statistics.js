import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <div>
    <span>Good{valueGood}</span>
    <span>Neutral{valueNeutral}</span>
    <span>Bad{valueBad}</span>
    <span>Total{totalFeedback}</span>
    <span>Positive feedback{positiveFeedbackPercentage}%</span>
  </div>
);
Statistics.propTypes = {
  valueGood: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
