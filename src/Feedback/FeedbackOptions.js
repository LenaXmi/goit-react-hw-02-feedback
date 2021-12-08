import PropTypes from "prop-types";

import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.OptionsContainer}>
    <ul className={s.OptionList}>
      {options.map((option, index) => {
        return (
          <li key={index} className={s.OptionItem}>
            <button
              className={s.OptionBtn}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
