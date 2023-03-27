import '../styles/mini_calendar.scss'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";



function App() {

    return (
        <div id='mini_calendar'>
            <div id='mini_calendar_app_bar'>
                <div>March 2023</div>
                <div>
                    <BsChevronLeft className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} />
                    <BsChevronRight className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} />
                </div>
            </div>
            <div id='mini_calendar_content'>
                <div id='content_left'>
                    <div></div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>7</div>
                </div>
                <div id='content_grid'></div>
            </div>
        </div>
    )
}

export default App
