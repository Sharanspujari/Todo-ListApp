import React, { useState ,useEffect} from "react";
// import {MdEdit,AiFillDelete} from 'react-icons/cg'

const todoDatafromLs=()=>{
  const data=localStorage.getItem('todos')
  if(data)
  {
    return JSON.parse(data)
  }else{
    return []
  }
}
function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const [todo,setTodo]=useState(todoDatafromLs());
console.log(todo)
  const handleSubmit = (e) => {
    e.preventDefault();
    const date=new Date();
    const time=date.getTime();

    let todoObjectData={
      id:time,
      todovalue:inputValue,
      completed:false
    }
    setTodo([...todo,todoObjectData])
    setInputValue('')
  };

useEffect(() => {
localStorage.setItem('todos',JSON.stringify(todo))
}, [todo])   //useEffect will run whenever  todo state changes

// getting todo data from local storage.

  return (
    <div className="home_container">
      <div className="home-wrapper">
        <form className="form_fields" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="todovalue"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Add an item"
            autoComplete="off"
            required
          />
          <button className="btn_add" type="submit">
            ADD
          </button>
        </form>
        </div>
        {
          todo.length > 0 &&(
            <>
              {
         todo.map((todoInfo,i)=>{
          return (
            <div className="todoinfo_container" key={todoInfo.id}>
               <div className="todofields">
                <input type="checkbox"/>
                <span className="todovalue">{todoInfo.todovalue}</span>
               </div>

               {/* edit delete */}
               <div className="action_container">
                  <div>
                  {/* <MdEdit/> */}
                  </div>
                  <div>
                   {/* <AiFillDelete/> */}
                  </div>
               </div>
            </div>
          )
         })
              }
            </>
          )
        }
     

    </div>
  );
}

export default TodoForm;
