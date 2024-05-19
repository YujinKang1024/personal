import React from "react";
import "./styles.css";

export default function SelectBox({ children, onSelectChange }) {
  return (
    <select
      className="select"
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
}
