import React, { useState, useEffect } from "react";
// import {MdEdit,MdDelete} from 'react-icons/all'

const todoDatafromLs = () => {
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(todoDatafromLs());
  console.log(todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const time = date.getTime();

    let todoObjectData = {
      id: time,
      todovalue: inputValue,
      completed: false,
    };
    setTodo([...todo, todoObjectData]);
    setInputValue("");
  };

  const handleDeleteItem = (id) => {
    // console.log(id)
    const filterdItem = todo.filter((item) => {
      return item.id !== id;
    });

    setTodo(filterdItem);
  };

  const[editItem,setEditItem]=useState(false)
  const [itemid,setItemid]=useState()
  const handleEdit = (todoInfo,i) => {
    setEditItem(true)
    setItemid(i)
    setInputValue(todoInfo.inputValue)
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]); //useEffect will run whenever  todo state changes

  // getting todo data from local storage.

  return (
    <>
     <div className="home_container">
    {
      editItem===false &&(
      
      <div className="home-wrapper">
        <form className="form_fields" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="todovalue"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Add to do"
            autoComplete="off"
            required
          />
          <button className="btn_add" type="submit">
            ADD
          </button>
        </form>
      </div>
     
      )
    }
   
      {todo.length > 0 && (
        <>
          {todo.map((todoInfo, i) => {
            return (
              <div className="todoinfo_container" key={todoInfo.id}>
                <div className="listwrapper">
                  <div className="todofields">
                    <input type="checkbox" />
                    <span className="todovalue">{todoInfo.todovalue}</span>
                  </div>

                  {/* edit delete */}
                  <div className="action_container">
                    <div className="btnedit">
                      {/* <MdEdit/> */}
                      <button onClick={() => handleEdit(todoInfo, i)}>
                        Edit
                      </button>
                    </div>
                    <div className="btndelete">
                      {/* <MdDelete/> */}
                      <button onClick={() => handleDeleteItem(todoInfo.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="btndeleteall">
            <button onClick={() => setTodo([])} className="btnall">
              DELETE ALL
            </button>
          </div>
        </>
      )}
      </div>
      </>
       );
}

export default TodoForm;
