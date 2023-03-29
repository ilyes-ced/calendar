
import '../styles/right_bar.scss'
import { BsFillCalendar2DateFill, BsPersonVcard, BsListUl } from "react-icons/bs";
import { NavLink } from "react-router-dom";


//const test =  (e: React.MouseEvent) => {
//    console.log(e)
//}




function App() {





    return (
        <div id='right_bar'>
            
            <NavLink to="/" className='right_element'>
                <BsFillCalendar2DateFill />
            </NavLink >

            <NavLink to="/todo" className='right_element'>
                <BsPersonVcard  />
            </NavLink>

            <NavLink  to="/contacts" className='right_element'>
                <BsListUl />
            </NavLink>

        </div>
    )
}

export default App
