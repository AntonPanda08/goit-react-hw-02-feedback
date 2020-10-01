import React, { Component } from "react";
import ButtonController from "./components/buttonList";
import ListReview from "./components/listReview";
import Section from "./components/section";
class App extends Component {
  static defaultProps = { amount: 0 };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBad = () => {
    this.setState((previousState) => {
      return {
        bad: previousState.bad + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState((previousState) => {
      return {
        neutral: previousState.neutral + 1,
      };
    });
  };
  handleGood = () => {
    this.setState((previousState) => {
      return {
        good: previousState.good + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => {
      return a + b;
    });
  };
  countPositiveFeedbackPercentage = (totalR, posR) => {
    return (posR / totalR) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentReview = Math.round(
      this.countPositiveFeedbackPercentage(total, this.state.good)
    );
    return (
      <>
        <Section title="Please leave feedback">
          <ButtonController
            onHandleGood={this.handleGood}
            onHandleNeutral={this.handleNeutral}
            onHandleBad={this.handleBad}
          />
        </Section>
        <Section title="Stats">
          <ListReview
            number={total}
            good={good}
            neutral={neutral}
            bad={bad}
            percentReview={percentReview}
          />
        </Section>
      </>
    );
  }
}
export default App;
