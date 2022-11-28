import React, { Component } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { SectionPart } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackSection/Feedback';
import { Statistics } from 'components/Statictics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <GlobalStyle />{' '}
        <SectionPart title="Please leave feedback">
          <FeedbackOptions></FeedbackOptions>
        </SectionPart>
        <SectionPart title="Statistics">
          <Statistics></Statistics>
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
