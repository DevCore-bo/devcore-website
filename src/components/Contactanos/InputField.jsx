import React from "react";
import "./Contactanos.css";

const InputField = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea value={value} onChange={onChange}></textarea>
      ) : (
        <input type={type} value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default InputField;
