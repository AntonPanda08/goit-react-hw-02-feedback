import React from "react";

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
export default ButtonController;
