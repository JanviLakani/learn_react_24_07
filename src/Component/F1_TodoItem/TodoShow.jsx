import React, { useState } from "react";

const TodoShow = () => {
  const [item, setItem] = useState("");
  const [allItem , setAllItem] =useState([])

  console.log("item",item);
  console.log("allitems", allItem);
  
  

const handleSubmit = (event) => {
    event.preventDefault()
   
    console.log("hello");
    setAllItem([...allItem ,item])
    setItem("")
}

  return (
    <div>
      <form action=""  onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" placeholder="enetr todo" name="todo" onChange={(e) => setItem(e.target.value)} value={item}/>

        <input type="submit" />
      </form>


      <ul>
        {
            allItem.map((v,i) => (
                <li>{v}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default TodoShow;
