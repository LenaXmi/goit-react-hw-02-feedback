import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions.js";
import Statistics from "./Statistics.js";
import Section from "./Section.js";
import Notification from "./Notification.js";

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  onOptionClick = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keysArr = Object.keys(this.state);

    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={keysArr}
            onLeaveFeedback={this.onOptionClick}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title={"Statistics"}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={
                this.countPositiveFeedbackPercentage() > 0
                  ? this.countPositiveFeedbackPercentage() + "%"
                  : ""
              }
            />
          </Section>
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </div>
    );
  }
}
export default Feedback;
