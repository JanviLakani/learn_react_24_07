
import React, { useState } from 'react';
import DisplayPrac from './DisplayPrac';



const TodoPrac = () => {

    const [todo , setTodo] = useState("")
    const [allTodo , setAllTodo] = useState([])

     console.log("todo",todo);
     console.log("allTodo",allTodo);
     

    const handleSubmit = (event) => {
         event.preventDefault();

        
       setAllTodo([...allTodo , { id : Math.floor(Math.random() * 10000)  ,todo}])
       setTodo("")
        
    }

// handle delete aama banavu km ke data aa hovathi 
    const handleDelete = (id) => {

      console.log("okokoko");

      console.log(id);
      
      const newtodo=allTodo.filter((v,i) => {
        return v.id !== id
      })

      setAllTodo(newtodo)
    }

    return (
        <div>
          <form action=""  onSubmit={(e) => handleSubmit(e)}>

            <input type="text"
             placeholder='enetr todo'
             name='todo'
             value={todo}
            onChange={(event)=> setTodo(event.target.value)}
             />

           <input type="submit" />


          </form>


          {/* <ul>
            {
                allTodo.map((v,i) => (
                    <li key={i}>{v}  <button>D</button></li>
                ))
            }
          </ul> */}


          <DisplayPrac data={allTodo}  btndelete={handleDelete}/>


        </div>
        
    );
};

export default TodoPrac;