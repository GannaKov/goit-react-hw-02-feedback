import React, { Component } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { SectionPart } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackSection/Feedback';
import { Statistics } from 'components/Statictics/Statistics';
export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    valueGood: this.props.good,
    valueNeutral: this.props.neutral,
    valueBad: this.props.bad,
  };

  handleGood = evt => {
    console.log(evt);
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
    }));
  };
  handleNeutral = evt => {
    console.log(evt);
    this.setState(prevState => ({
      valueNeutral: prevState.valueNeutral + 1,
    }));
  };
  handleBad = evt => {
    console.log(evt);
    this.setState(prevState => ({
      valueBad: prevState.valueBad + 1,
    }));
  };
  render() {
    const valueGood = this.state.valueGood;
    const valueNeutral = this.state.valueNeutral;
    const valueBad = this.state.valueBad;

    return (
      <div>
        <GlobalStyle />
        <SectionPart title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </SectionPart>
        <SectionPart title="Statistics">
          <Statistics
            valueGood={valueGood}
            valueNeutral={valueNeutral}
            valueBad={valueBad}
          />
        </SectionPart>
      </div>
    );
  }
}
// export const App = () => {
//   return (
//     <div>
//       <GlobalStyle /> <SectionPart title="Please leave feedback"></SectionPart>
//       <SectionPart title="Statistics"></SectionPart>
//     </div>
//   );
// };
