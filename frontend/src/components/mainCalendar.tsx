import { useAppSelector, useAppDispatch } from '../hook'
import { decrement_month, increment_month, reset_month } from '../contexts/thisMonth'
import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const month_names = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let current_date = new Date();
let tempo_date = new Date();





function App() {

    const calendar = useAppSelector((state) => state)
    const dispatch = useAppDispatch()

    const [calendarState, set_calendar] = useState(calendar)

    useEffect(() => {

    }, [])

    const this_month = () => {
        dispatch(reset_month())
    }
    const add_month = () => {
        tempo_date.setMonth(tempo_date.getMonth()+1)
        dispatch(increment_month())
    }
    const remove_month = () => {
        tempo_date.setMonth(tempo_date.getMonth()-1)
        dispatch(decrement_month())
    }

    return (
        <div id='main_calendar'>
            <div id='calendar_app_bar'>
                <div>
                    <button className='button secondary_button' onClick={this_month} >today</button>
                    <div className='v_divider'></div>   
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} onClick={remove_month}>
                        <BsChevronLeft  />
                    </div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} onClick={add_month}>
                        <BsChevronRight  />
                    </div>
                    <div className='v_divider'></div>
                    <button className='button secondary_button'> {month_names[tempo_date.getMonth()]}  {tempo_date.getFullYear()} </button>
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
                        {
                            
                        }
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >1</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >2</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >3</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >4</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >5</div>
                        { calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? <div style={{height: "20%" /* 20 or 16.6666% */ }} >6</div> : "" }
                        
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
                                        <div className="event_item_see_more">
                                            <div> n more </div>
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
