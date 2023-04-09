import { useAppSelector, useAppDispatch } from '../hook'
import { decrement_month, increment_month } from '../contexts/thisMonth'
import { useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

let last_month: number[]  = [];
let this_month: number[]  = [];
let next_month: number[]  = [];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const month_names = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let current_date = new Date();





function App() {

    const calendar = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
    useEffect(() => {

    }, [])


    return (
        <div id='main_calendar'>
            <div id='calendar_app_bar'>
                <div>
                    <button className='button secondary_button'>today</button>
                    <div className='v_divider'></div>   
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} onClick={() => {current_date.setDate(current_date.getDate()+1); console.log(current_date)}}>
                        <BsChevronLeft  />
                    </div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} onClick={() => {current_date.setDate(current_date.getDate()+1); console.log(current_date)}}>
                        <BsChevronRight  />
                    </div>
                    <div className='v_divider'></div>
                    <button className='button secondary_button'> {month_names[current_date.getMonth()]} {current_date.getDate()}, {current_date.getFullYear()} </button>
                    {}
                </div>
                <div>
                    <div className='v_divider'></div>
                    <div className='button secondary_button'>timezone</div>
                    <div className='v_divider'></div>
                    <button className='button secondary_button'>day</button>
                    <button className='button secondary_button'>week</button>
                    <button className='button secondary_button'>month</button>

                </div>
            </div>
            <div id='calendary_center'>
                <div id='calendar_days'>
                    <div></div>
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div id='calendar'>
                    <div id='week_n'>
                        <div style={{height: '16.66666%' /* 20 or 16.6666% */ }} >1</div>
                        <div style={{height: '16.66666%' /* 20 or 16.6666% */ }} >2</div>
                        <div style={{height: '16.66666%' /* 20 or 16.6666% */ }} >3</div>
                        <div style={{height: '16.66666%' /* 20 or 16.6666% */ }} >4</div>
                        <div style={{height: '16.66666%' /* 20 or 16.6666% */ }} >5</div>
                        <div style={{height: '16.66666%' /* 20 or 16.6666% */ }} >6</div> {/* conditional */}
                    </div>
                    <div id='calendar_items'>
                        {
                            calendar.calendar.map((month, i) => {
                                return month.map((ele, i) => {
                                    return <div className="calendar_item">
                                        <button className="button secondary_button"> {ele} </button>
                                        <div className="event_item">
                                            <div>event name</div>
                                        </div>
                                    
                                    </div>
                                })
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
