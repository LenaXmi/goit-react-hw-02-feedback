import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const Notification = ({ message }) => (
  <p className={s.Notification}>{message}</p>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
