
import Header from './components/layout/header';
import { Outlet } from 'react-router-dom';


const App = () => {

  return (
    <>
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default App
