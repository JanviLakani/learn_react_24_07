
import React from "react";
import './newinput.css'

function Textinput({ type, name, placeholder, onChange, label ,error }) {
  //   <input
  //       type="text"
  //       name="todo"
  //       placeholder="enter todo"
  //       value={todo}
  //       onChange={(e) => setTodo(e.target.value)}
  //     />

  console.log("errorrrr" ,error);
  
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? "inputcolor" : ''}
      />


      {error && <span className="errorr">{error}</span>}
      
    </>

    
    
  );

  
}

export default Textinput;