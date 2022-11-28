import React from 'react';
export const Statistics = ({ valueGood, valueNeutral, valueBad }) => (
  <div>
    <span>Good{valueGood}</span> <span>Neutral{valueNeutral}</span>
    <span>Bad{valueBad}</span>
    <span>Total</span> <span>Positive feedback</span>
  </div>
);
