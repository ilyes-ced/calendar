import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '../../styles/home_page.scss'
import Header from '../../components/header'
import LeftSideBar from '../../components/leftSideBar'
import MainCalendar from '../../components/mainCalendar'
import RightSideBar from '../../components/rightSideBar'

import { Outlet } from "react-router-dom";

function App() {

    return (
        <div id='main_container' >
            <Header/>
            <div id='center'>
                <LeftSideBar/>
                <Outlet />
                <RightSideBar/>
            </div>
        </div>
    )
}

export default App
