import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.scss'
import Login from './views/auth/Login'
import Register from './views/auth/Register'


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);



function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
