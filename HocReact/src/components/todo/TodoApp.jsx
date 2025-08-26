import './todo.css';
import TodoNew from './TodoNew';
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
    // {
    //   id: 1,
    //   name: "Learning React"
    // },
    // {
    //   id: 2,
    //   name: "Watching Youtube"
    // }
  ])


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    // Nên
    // "..." là coppy data trc đấy 
    setTodoList([...todoList, newTodo])
    // Không nên : array.push
    // todoList.push(newTodo)
    // setTodoList(todoList)
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
        <div className="todo=container">
      <div className="todo-title">Todo list</div>
      <TodoNew
      addNewTodo={addNewTodo}
      />

      {/* {
        todoList.length > 0 && <TodoData
      todoList={todoList}
      />
      }

       {
      todoList.length === 0 && <div className='todo-image'>
        <img src={reactLogo} alt="Anh" />
      </div>
      } */}

      {
        todoList.length > 0 ? 
      
      <TodoData
      todoList={todoList}
      deleteTodo={deleteTodo}
      />
      :
      <div className='todo-image'>
        <img src={reactLogo} alt="Anh" />
      </div>
      }
    </div>
  )
}

export default TodoApp;