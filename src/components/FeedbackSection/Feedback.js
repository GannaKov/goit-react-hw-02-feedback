import React from 'react';

export const FeedbackOptions = ({ onGood, onBad, onNeutral }) => (
  <div>
    <ul>
      <li>
        <button type="button" onClick={onGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);
