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
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => {
      return { [value]: prevState[value] + 1 };
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
            onHandleChange={this.handleChange}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
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
