import React from "react";
import PropTypes from "prop-types";
const ButtonController = ({ onHahdleChange, good, bad, neutral }) => (
  <>
    <button type="button" value={good} onClick={onHahdleChange}>
      Good
    </button>
    <br />
    <br />
    <button type="button" value={neutral} onClick={onHahdleChange}>
      Neutral
    </button>
    <br />
    <br />
    <button type="button" value={bad} onClick={onHahdleChange}>
      Bad
    </button>
  </>
);
ButtonController.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};
export default ButtonController;
