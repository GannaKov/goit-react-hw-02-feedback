import React, { Component } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { SectionPart } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackSection/Feedback';
import { Statistics } from 'components/Statictics/Statistics';
import { Notification } from 'components/Section/Notification';
import feedbackOptions from '../../feedBackOptions.json';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // state = {
  //   valueGood: this.props.good,
  //   valueNeutral: this.props.neutral,
  //   valueBad: this.props.bad,
  // };

  handleIncrement = e => {
    const target = e.target.name;
    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     valueNeutral: prevState.valueNeutral + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     valueBad: prevState.valueBad + 1,
  //   }));
  // };

  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }
  render() {
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();

    const { good, neutral, bad } = this.state;

    return (
      <div>
        <GlobalStyle />
        <SectionPart title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionPart>
        <SectionPart title="Statistics">
          {totalFeedback ? (
            <Statistics
              valueGood={good}
              valueNeutral={neutral}
              valueBad={bad}
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionPart>
      </div>
    );
  }
}
