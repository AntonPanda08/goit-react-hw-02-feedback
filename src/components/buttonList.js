import React from "react";
import PropTypes from "prop-types";
const ButtonController = ({ onHandleGood, onHandleNeutral, onHandleBad }) => (
  <>
    <button type="button" onClick={onHandleGood}>
      Good
    </button>
    <br />
    <br />
    <button type="button" onClick={onHandleNeutral}>
      Neutral
    </button>
    <br />
    <br />
    <button type="button" onClick={onHandleBad}>
      Bad
    </button>
  </>
);
ButtonController.propTypes = {
  onHandleGood: PropTypes.func.isRequired,
  onHandleNeutral: PropTypes.func.isRequired,
  onHandleBad: PropTypes.func.isRequired,
};
export default ButtonController;
