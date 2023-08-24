import React from 'react';
import shortid from 'shortid';
import styles from '../style.module.css';


const Form = ({todo, setTodo, todoList, setTodoList}) => {

  const handlechange = (e) => {
    setTodo(e.target.value)
  };

  const handlesubmit = (e) => {
    e.preventDefault()
    setTodoList([...todoList, {name : todo, id: shortid.generate(5)}])
    setTodo('')
  };

  return (
    <div className={styles.todoform}>
        <form onSubmit={handlesubmit}>
            <input 
              className={styles.todoinput}
              value={todo}
              onChange={handlechange}
              placeholder='Add To Do Activity'
              
              ></input>
            <button type='submit' className={styles.todobutton} >ADD</button>
        </form>
    </div>
  )
};

export default Form;