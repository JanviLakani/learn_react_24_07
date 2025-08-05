

import React from 'react';

function TextAreaAddress({ name, label, value, onChange, error }) {
    return (
         <>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        rows="2"
        cols="30"
        className={error ? "inputcolor" : ""}
      ></textarea>
      <br />
      {error && <span className="color">{error}</span>}
    </>
    );
}

export default TextAreaAddress;