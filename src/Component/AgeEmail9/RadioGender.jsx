

import React from 'react';

function RadioGender({ name, label, options, selectedValue, onChange, error }) {
    return (
        <>
            <label>{label}</label>
      
        {options.map((opt) => (
          <label key={opt.value} >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selectedValue === opt.value}
              onChange={onChange}
            />
            {opt.label}
          </label>
        ))}
    
      {error && <span className="color">{error}</span>}
        </>
    );
}

export default RadioGender;