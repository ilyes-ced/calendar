import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/app.scss'
import Login from './views/auth/login'
import Register from './views/auth/register'
import HomePage from './views/home'
import Calendar from './views/home/calendar'
import Contacts from './views/home/contacts'
import ToDo from './views/home/toDo'


const router = createBrowserRouter([
    {
      	path: "/",      
      	element: <HomePage />,
		children: [
			{
			  	path: "/",
			  	element: <Calendar />,
			},
			{
			  	path: "/contacts",
			  	element: <Contacts />,
			},
			{
			  	path: "/todo",
			  	element: <ToDo />,
			},
		],
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
