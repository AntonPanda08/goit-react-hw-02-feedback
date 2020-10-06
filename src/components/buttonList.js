import React from "react";
import PropTypes from "prop-types";
const ButtonController = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return keys.map((key) => (
    <button key={key} type="button" value={key} onClick={onLeaveFeedback}>
      {key}
    </button>
  ));
};
ButtonController.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default ButtonController;
