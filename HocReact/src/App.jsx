import { useState } from 'react'
import MyComponents from "./components/learn/MyComponents"
import SecondComponents from "./components/learn/SecondComponents"
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  // arrow Funtion
  // function myFuntion(){
  //   console.log("run my Funtion");
  // }

  const myFuntion = () => {
    console.log("run my Funtion");
  }

  myFuntion();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <MyComponents/>
      <SecondComponents/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
