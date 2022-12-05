import React from 'react';
import PropTypes from 'prop-types';
import { StatWrapper,StatItem } from './Statistics.styled';

export const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <StatWrapper>
    <StatItem>Good {valueGood}</StatItem>
    <StatItem>Neutral {valueNeutral}</StatItem>
    <StatItem>Bad {valueBad}</StatItem>
    <StatItem>Total {totalFeedback}</StatItem>
    <StatItem>Positive feedback {positiveFeedbackPercentage}%</StatItem>
  </StatWrapper>
);
Statistics.propTypes = {
  valueGood: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
