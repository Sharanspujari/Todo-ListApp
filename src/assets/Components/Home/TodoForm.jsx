import React, { useState, useEffect } from "react";
// import {MdEdit,MdDelete} from 'react-icons/all'
import { Icon } from 'react-icons-kit'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'
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
  // console.log(todo);

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

  const [todoItem, setTodoItem] = useState(false);
  const [itemid, setItemid] = useState();

  const handleEdit = (todoInf, index) => {
    setTodoItem(true);
    setItemid(index);
    setInputValue(todoInf.todovalue);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let items = [...todo];
    let item = items[itemid];
    item.todovalue = inputValue;
    item.completed = false;
    items[itemid] = item;
    setTodo(items);
    setInputValue("");
    setTodoItem(false);
  };

  const handleCheckbox = (todoid) => {
    let TodoArray = [];
    todo.forEach((todoss) => {
      if (todoss.id === todoid) {
        if (todoss.completed === false) {
          todoss.completed = true;
        } else if (todoss.completed === true) {
          todoss.completed = false;
        }
      }
      TodoArray.push(todoss);
      setTodo(TodoArray);
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]); 

  return (
    <>
     
        {todoItem === false && (
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
        )}
        {todoItem === true && (
          <div className="home-wrapper">
            <form className="form_fields" onSubmit={handleEditSubmit}>
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
                Update
              </button>
            </form>
          </div>
        )}
        {todo.length>0 &&(
            <>
              {
                todo.map((todoInfo,index)=>(
                 
                <div className='todo' key={todoInfo.id}>
                  <div className="ti">
                     
                      {todoItem ===false&&(
                        <input type='checkbox' checked={todoInfo.completed}
                        onChange={()=>handleCheckbox(todoInfo.id)}/>
                      )}
                      <span className="todoitems"
                      style={todoInfo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todoInfo.todovalue}
                      </span>
                  </div>

                  
                  {todoItem===false&&(
                    <div className='editdelete_conatiner'>
                      <div className="editdelete_div"
                      onClick={()=>handleEdit(todoInfo,index)}>
                          <Icon className="edit-icon" icon={edit2} size={20}/>
                      </div>
                      <div onClick={()=>handleDeleteItem(todoInfo.id)}>
                          <Icon className="delete-icon" icon={trash} size={20}/>
                      </div>
                    </div>
                  )}

                </div>
               
              ))} 

             
              {todoItem===false&&(
                <div className="delete-all" >
                  <button className='btn-deleteall'
                  onClick={()=>setTodo([])}>Delete All To Do</button>
                </div>
              )}
            </>
          )}
     
    </>
  );
}

export default TodoForm;
