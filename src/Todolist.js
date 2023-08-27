import React from "react";

const Todolist = ({ todos,deleteHandler }) => {
 //const arr1=["vamsi","goutham"];
  return(
    <div>
        {todos.map((todo,index)=>{
                 return(
                  <div key={index} className="p-1">
                  <h5 className=" bg-white p-2" >{todo} &nbsp; <button className="bg-danger" onClick={()=>deleteHandler(index)}>Delete</button></h5>
               </div>
                 )
           })}
      
    </div>
  )
};

export default Todolist;
