import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/app.scss'
import Login from './views/auth/login'
import Register from './views/auth/register'
import HomePage from './views/home'
import Calendar from './views/home/calendar'
import ToDo from './views/home/toDo'
import { useAppSelector } from './hook'
import { useNavigate } from "react-router-dom";


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
			  	path: "/todo",
			  	element: <ToDo />,
			},
		],
    },
    {
		index: true,
      	path: "/login",
      	element: <Login />,
    },
    {
      	path: "/register",
      	element: <Register />,
    },
]);




function App() {

    const user = useAppSelector((state) => state.user_data)
	//const navigate = useNavigate()

	if (user.is_authed) return (
		<div className="App">
			<RouterProvider router={router} /> 
		</div>
	)
	else return <div className="App">
			<RouterProvider router={router} fallbackElement={<Login/>} /> 
		</div>


}

export default App
