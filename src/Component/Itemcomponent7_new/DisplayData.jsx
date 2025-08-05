
import React from "react";

function DisplayData({ data, deletebtn, completebtn ,editbtn }) {
  console.log("data", data);

  console.log("deletebtn", deletebtn);

  // console.log("completebtn" ,completebtn);
  
 
  

  return (
    <div>
      <ul>
        {data.map((v, i) => (
          <li
            key={i}
           
            style={{textDecoration: v.status ? "line-through" : "none"  }}
          >
            {v.todo}

            <button onClick={() => editbtn(v.id)}>E</button>
            <button onClick={() => deletebtn(v.id)}>d</button>
            <button onClick={() => completebtn(v.id)}>

              {
                v.status ? "uncompleted" : "completed"
              }
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;


