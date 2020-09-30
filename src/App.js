import React, { Component } from "react";
import ButtonController from "./components/buttonList";
import ListReview from "./components/listReview";
class App extends Component {
  static defaultProps = { amount: 0 };

  static propTypes = {};
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
        <h2>Please leave feedback</h2>
        <ButtonController
          onHandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />
        <h2>Stats</h2>
        <ListReview
          number={total}
          good={good}
          neutral={neutral}
          bad={bad}
          percentReview={percentReview}
        />
      </>
    );
  }
}
export default App;
