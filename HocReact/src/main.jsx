import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login';
import HomePage from './pages/home';
import UsersPage from './pages/users';
import BookPage from './pages/books';
import RegisterPage from './pages/register';
import './styles/global.css'
import TodoApp from './components/todo/TodoApp';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <TodoApp/>,
      },
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/users",
        element: <UsersPage/>,
      },
      {
        path: "/books",
        element: <BookPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
