
import '../styles/right_bar.scss'
import { BsFillCalendar2DateFill, BsPersonVcard, BsListUl } from "react-icons/bs";

const test =  (e: React.MouseEvent) => {
    console.log(e)
}




function App() {





    return (
        <div id='right_bar'>
            <div className='right_element' onClick={test}>
                <BsFillCalendar2DateFill />
            </div>
            <div className='right_element' onClick={test}>
                <BsPersonVcard />
            </div>
            <div className='right_element' onClick={test}>
                <BsListUl />
            </div>
        </div>
    )
}

export default App
