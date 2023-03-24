import '../../styles/home_page.scss'
import Header from '../../components/header'
import LeftSideBar from '../../components/leftSideBar'
import MainCalendar from '../../components/mainCalendar'
import RightSideBar from '../../components/rightSideBar'

function App() {

    return (
        <div id='main_container' >
            <Header/>
            <div id='center'>
                <LeftSideBar/>
                <div id='main_calendar_container'>
                    <MainCalendar/>
                </div>
                <RightSideBar/>
            </div>
        </div>
    )
}

export default App
