import { Outlet, Navigate } from "react-router-dom";
import Header from '../../components/header'
import LeftSideBar from '../../components/leftSideBar'
import RightSideBar from '../../components/rightSideBar'
import { useAppSelector } from '../../hook'


function App() {

    const user = useAppSelector((state) => state.user_data)

    if (!user.is_authed) return <Navigate to="/login" replace />
    return (
        <div id='main_container' >
            <Header/>
            <div id='center'>
                <LeftSideBar/>
                <div id="center_main_box">
                    <Outlet />
                </div>    
                <RightSideBar/>
            </div>
        </div>
    )

}

export default App
