

import React, { useState } from "react";
import DisplayData from "./DisplayData";

const Itemcomponent = () => {
  const [todo, setTodo] = useState("");
  const [alltodo, setAlltodo] = useState([]);
  const [update, setUpdate] = useState(null);
  const [error , setError] = useState("")

  // ======================================================== 

  // console.log(todo, alltodo);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // console.log("hello");

  //   if(todo === '') {
  //     setError("please enter todo");
  //   } else {
  //     setError("")
  //   }

  //   if (update === null) {

  //     setAlltodo([
  //       ...alltodo,
  //       { id: Math.floor(Math.random() * 10000), todo, status: false },
  //     ]);
  //     setTodo("");


  //   } else {

  //     const updateData = alltodo.map((v, i) => {
  //     console.log("value", v);

  //     if (v.id === update) {
  //       return { ...v, todo : todo};
  //     } else {
  //       return v;
  //     }
  //   });


    
  //   setAlltodo(updateData);
  //   setUpdate(null)
  //   setTodo("");

  //   }
  // };

  // const handleDelete = (id) => {
  //   console.log("okey");

  //   console.log(id);

  //   const fdata = alltodo.filter((v) => v.id !== id);

  //   console.log("fdata", fdata);

  //   setAlltodo(fdata);
  // };

  // const handleCompleted = (id) => {
  //   console.log("okokok", "id", id);

  //   const fData = alltodo.map((v, i) => {
  //     console.log("value", v);

  //     if (v.id === id) {
  //       return { ...v, status: !v.status };
  //     } else {
  //       return v;
  //     }
  //   });

  //   console.log("fData", fData);

  //   setAlltodo(fData);
  // };

  // const handleEdit = (id) => {
  //   console.log("id", id, alltodo);

  //   const obj = alltodo.find((v) => v.id === id);

  //   console.log("objjj", obj.todo);

  //   setTodo(obj.todo);

  //   setUpdate(id);
  // };


  // ============================================================================== 

  // ========================================add for, other file  


   const handleError = () => {
    let formErr = false;
    let newErr = {};

    if (todo.trim()) {
      newErr.inputText = "";
    } else {
      newErr.inputText = "inter todo";
      formErr = true;
    }

    setErrors(newErr);

    return formErr;
  };

  console.log(todo, alltodo);

  console.log("errors show", errors);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!handleError()) {
      if (update === null) {
        setAlltodo([
          ...alltodo,
          { id: Math.floor(Math.random() * 10000), todo, status: false },
        ]);
        setTodo("");
      } else {
        const updateData = alltodo.map((v, i) => {
          console.log("value", v);

          if (v.id === update) {
            return { ...v, todo: todo };
          } else {
            return v;
          }
        });

        setAlltodo(updateData);
        setUpdate(null);
        setTodo("");
      }
    }
  };

  const handleDelete = (id) => {
    console.log("okey");

    console.log(id);

    const fdata = alltodo.filter((v) => v.id !== id);

    console.log("fdata", fdata);

    setAlltodo(fdata);
  };

  const handleCompleted = (id) => {
    console.log("okokok", "id", id);

    const fData = alltodo.map((v, i) => {
      console.log("value", v);

      if (v.id === id) {
        return { ...v, status: !v.status };
      } else {
        return v;
      }
    });

    console.log("fData", fData);

    setAlltodo(fData);
  };

  const handleEdit = (id) => {
    console.log("id", id, alltodo);

    const obj = alltodo.find((v) => v.id === id);

    console.log("objjj", obj.todo);

    setTodo(obj.todo);

    setUpdate(id);
  };
// ===================================================other 

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        {/* <input               
          type="text"
          name="todo"
          placeholder="enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        /> */}

          <Textinput
          type="text"
          name="todo"
          placeholder="enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label={"todo"}
          error={errors.inputText}
        />

        <input type="submit" value={update ? "update" : "submit"} />
      </form>

      <span style={{ color: "red"}}>{error}</span>

      <DisplayData
        data={alltodo}
        deletebtn={handleDelete}
        completebtn={handleCompleted}
        editbtn={handleEdit}
      />
    </div>
  );
};

export default Itemcomponent;
