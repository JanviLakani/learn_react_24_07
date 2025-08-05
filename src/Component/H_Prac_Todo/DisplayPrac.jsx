import React from "react";

function DisplayPrac({data ,btndelete}) {

    console.log("giving props",data);

    console.log("btndelete" ,btndelete);
    
    
  return (
    <div>
      <ul>
        {data.map((v, i) => (
          <li key={i}>
            {v.todo} <button onClick={() => btndelete(v.id)}>D</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayPrac;
