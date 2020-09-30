import React from "react";

const ListReview = ({ number, good, neutral, bad, percentReview }) => (
  <div>
    {number < 1 ? (
      <p>No feedback</p>
    ) : (
      <div>
        <span className="goodReview">Good: {good}</span>
        <span className="neutralReview"> Neutral: {neutral}</span>
        <span className="badReview">Bad: {bad}</span>
        <span className="totalReview">Total: {number}</span>
        <span className="percentReview">
          Positive feedback: {percentReview}%
        </span>
      </div>
    )}
  </div>
);
export default ListReview;
