import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper,Button,BtnList,BtnItem } from './Feedback.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    <BtnList>
      {options.map(item => (
        <BtnItem key={item.name}>
          <Button type="button" onClick={onLeaveFeedback} name={item.name}>
            {item.value}
          </Button>
        </BtnItem>
      ))}
    </BtnList>
  </Wrapper>
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
