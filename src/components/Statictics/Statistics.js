import React from 'react';
export const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  totalFeedback,
}) => (
  <div>
    <span>Good{valueGood}</span>
    <span>Neutral{valueNeutral}</span>
    <span>Bad{valueBad}</span>
    <span>Total{totalFeedback}</span> <span>Positive feedback</span>
  </div>
);
