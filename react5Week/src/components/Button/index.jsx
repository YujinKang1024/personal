import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Button({ type, onClick, text }) {
  return (
    <button type={type} onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};
