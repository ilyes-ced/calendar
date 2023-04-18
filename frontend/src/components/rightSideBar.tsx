import { useState } from "react";
import { BsFillCalendar2DateFill, BsPersonVcard, BsListUl } from "react-icons/bs";
import { NavLink } from "react-router-dom";


//const test =  (e: React.MouseEvent) => {
//    console.log(e)
//}




function App() {




    return (
        <div id='right_bar' >
            <div>
                <NavLink to="/" className='right_element'>
                    <BsFillCalendar2DateFill />
                </NavLink >

                <NavLink to="/todo" className='right_element'>
                    <BsListUl />
                </NavLink>

                <div className='right_element' >
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
