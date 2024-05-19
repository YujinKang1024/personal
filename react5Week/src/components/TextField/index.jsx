import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function TextField({ id, name, placeholder, onChange, required }) {
  return (
    <div className="input-text-field">
      <input type="text" id={id} name={name} placeholder={placeholder} onChange={onChange} required={required} />
    </div>
  );
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
