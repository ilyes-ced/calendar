import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/app.scss'
import Login from './views/auth/login'
import Register from './views/auth/register'
import HomePage from './views/home'


const router = createBrowserRouter([
    {
      path: "/",      
      element: <HomePage />,
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
