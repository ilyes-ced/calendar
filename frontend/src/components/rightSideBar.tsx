import { useState } from "react";
import { BsFillCalendar2DateFill, BsPersonVcard, BsListUl } from "react-icons/bs";
import { NavLink } from "react-router-dom";


//const test =  (e: React.MouseEvent) => {
//    console.log(e)
//}




function App() {

    const [right_bar, set_right_bar] = useState(false)



    return (
        <div id='right_bar' style={{width: right_bar ? '300px' : '55px' }}>
            <div>
                <NavLink to="/" className='right_element'>
                    <BsFillCalendar2DateFill />
                </NavLink >

                <NavLink to="/todo" className='right_element'>
                    <BsListUl />
                </NavLink>

                <div className='right_element' onClick={() => {set_right_bar(!right_bar)}} >
                    <BsPersonVcard  />
                </div>
            </div>
            {/*
            <div>
                ff
            </div>
            */}

        </div>
    )
}

export default App
