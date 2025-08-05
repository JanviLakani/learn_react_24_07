

import React from 'react';

function CheckboxHobbies({ name, label, options, selectedValues = [], onChange, error }) {
    return (
            <div>
      <label>{label}</label>
      <div>
        {options.map((v) => (
          <label key={v.value} >
            <input
              type="checkbox"
              name={name}
              value={v.value}
              checked={selectedValues.includes(v.value)}
              onChange={onChange}
            />
            {v.label}
          </label>
        ))}
      </div>
      {error && <span className="color">{error}</span>}
    </div>
    );
}

export default CheckboxHobbies;