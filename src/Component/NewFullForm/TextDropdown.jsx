

import React from 'react';

function TextDropdown({name, value, onChange  ,error ,options ,label  }) {

    console.log(name, value, onChange  ,error ,options ,label );
    
   
     console.log("namename",name);
      console.log("valuevalue",value);
       console.log("onChange",onChange);
        console.log("errorerror",error); 
         console.log("optionsoptions",options);
          console.log("labellabel",label);
    
    return (
        <>
                  
       <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
         className={error ? "inputcolor" : ""}
        
       
      >
        <option value="">--select--</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
              {opt.label}
            
          </option>
        ))}
      </select>

      

      {error && <span className="color" >{error}</span>}
        </>
    );
}

export default TextDropdown;