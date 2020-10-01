import React from "react";
import PropTypes from "prop-types";
const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Section;
