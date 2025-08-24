import './components/todo/todo.css'
import TodoNew from "./components/todo/TodoNew"
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learning React"
    },
    {
      id: 2,
      name: "Watching Youtube"
    }
  ])

  const Bin = "Bin haha";
  const age = 19;
  const data = {
    address: "danang",
    country: "vietnam"
  }

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

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo=container">
      <div className="todo-title">Todo list</div>
      <TodoNew
      addNewTodo={addNewTodo}
      />
      <TodoData
      name={Bin}
      age={age}
      address={data.address}
      country={data.country}
      todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="Anh" />
      </div>
    </div>
  )
}

export default App
