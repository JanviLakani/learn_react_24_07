import React, { useState } from "react";

const TodoItem = () => {
  const [todo, setTodo] = useState();
  const [alltodo, setAlltodo] = useState([]);

  console.log(todo, alltodo);

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("hello");

    setAlltodo([...alltodo, todo]);
    setTodo("");
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          placeholder="enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <input type="submit" />
      </form>

      <ul>
        {alltodo.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
