import React from 'react';
import styles from '../style.module.css';

const Todo = ({ todoitem, todoList, setTodoList }) => {

  const DeleteTodo = (e) => {
    setTodoList(todoList.filter((item) => item.id !== todoitem.id));
  };

  return (
    <div>
        <div className={styles.todoitem}>
            <h3 className={styles.todoname}>{todoitem.name}</h3>
            <button onClick={DeleteTodo} className={styles.deletebutton}>DONE</button>
        </div>
    </div>
  )
};

export default Todo;