import PropTypes from "prop-types";

import s from "./Feedback.module.css";

const FeedbackOptions = ({ onGoodClick, onNeutralClick, onBadClick }) => (
  <div className={s.OptionsContainer}>
    <button type="button" onClick={onGoodClick} className={s.OptionBtn}>
      Good
    </button>
    <button type="button" onClick={onNeutralClick} className={s.OptionBtn}>
      Neutral
    </button>
    <button type="button" onClick={onBadClick} className={s.OptionBtn}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onGoodClick: PropTypes.func.isRequired,
  onNeutralClick: PropTypes.func.isRequired,
  onBadClick: PropTypes.func.isRequired,
};
