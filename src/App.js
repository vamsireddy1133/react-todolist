import "./App.css";
import Todolist from "./Todolist";
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newtodos = [...todos, task];
    setTodos(newtodos);
    console.log(todos);
    setTask("");
  };
  const deleteHandler=(indexValue)=>{
    const  newtodos=todos.filter((todo,index)=>{
      return index!==indexValue;
    })
    setTodos(newtodos);
  }
  return (
    <div className="card bg-secondary">
      <div className="card-body">
        <center>
          <h5 className="fw-bold lh-lg ">TODO MANAGEMENT SYSTEM</h5>
          <form onSubmit={submitHandler}>
            <input
               className="mb-2"
              type="text"
              name="task"
              value={task}
              onChange={changeHandler}
              placeholder="enter todo"
            ></input>
            &nbsp;&nbsp;
            <button className="bg-success">submit</button>
          </form>
          <Todolist todos={todos}  deleteHandler={deleteHandler}/>
        
        </center>
      </div>
    </div>
  );
}

export default App;
