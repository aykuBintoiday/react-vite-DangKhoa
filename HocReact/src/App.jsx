import './components/todo/todo.css'
import TodoNew from "./components/todo/TodoNew"
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg';
const App = () => {

  const Bin = "Bin haha";
  const age = 19;
  const data = {
    address: "danang",
    country: "vietnam"
  }

  return (
    <div className="todo=container">
      <div className="todo-title">Todo list</div>
      <TodoNew/>
      <TodoData
      name={Bin}
      age={age}
      address={data.address}
      country={data.country}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="Anh" />
      </div>
    </div>
  )
}

export default App
