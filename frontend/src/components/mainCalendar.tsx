import { useAppSelector, useAppDispatch } from '../hook'
import { decrement_month, increment_month, reset_month } from '../contexts/thisMonth'
import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import CreateEvent from '../modals/createEvent'
import { init_events_axios } from '../adapters/events'


const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const month_names = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let current_date = new Date();
let display_date = new Date();



function App() {

    const calendar = useAppSelector((state) => state)
    const user_data = useAppSelector((state) => state.user_data)
    const dispatch = useAppDispatch()

    const [show_create_event_modal, set_show_create_event_modal] = useState(false)
    const [clicked_date, set_clicked_date] = useState(new Date())

    useEffect(() => {
        init_events_axios(
            new Date(display_date.getFullYear(), display_date.getMonth()-1, calendar.calendar[0][0]).getTime()/1000,
            new Date(display_date.getFullYear(), display_date.getMonth()+1, calendar.calendar[2][calendar.calendar[2].length-1]).getTime()/1000
        )
    }, [])

    const this_month = () => {
        display_date = new Date();
        dispatch(reset_month())
    }
    const add_month = () => {
        display_date.setMonth(display_date.getMonth()+1)
        dispatch(increment_month())
    }
    const remove_month = () => {
        display_date.setMonth(display_date.getMonth()-1)
        dispatch(decrement_month())
    }

    const toggle_create_event = (day_number: number, month_offset: number) => {
        set_clicked_date(new Date(display_date.getFullYear(), display_date.getMonth() + month_offset, day_number+1))
        set_show_create_event_modal(!show_create_event_modal)
    }
    return (
        <div id='main_calendar'>

            {
                show_create_event_modal ? <CreateEvent start_date={clicked_date} close_me={toggle_create_event} /> : ""
            }
            
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
                    <button className='button secondary_button'> {month_names[display_date.getMonth()]}  {display_date.getFullYear()} </button>
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

                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >1</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >2</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >3</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >4</div>
                        <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? '16.66666%' : "20%" /* 20 or 16.6666% */ }} >5</div>
                        { calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? <div style={{height: "20%" /* 20 or 16.6666% */ }} >6</div> : "" }
                        
                    </div>
                    <div id='calendar_items'>
                        {
                            calendar.calendar[0].map((ele, i) => {
                                return (
                                    <div className="calendar_item" onClick={() => { toggle_create_event(ele, -1) }}>
                                        <button className="button secondary_button"> {ele} </button>
                                        
                                    </div>
                                )
                            })
                        }
                        {
                            calendar.calendar[1].map((ele, i) => {
                                return (
                                    <div className="calendar_item" onClick={() => { toggle_create_event(ele, 0) }}>
                                        <button className="button secondary_button"> {ele} </button>
                                        {
                                            user_data.events.map((event, i) => {
                                                if(
                                                    new Date(event.start_date*1000).getDate() === ele &&
                                                    new Date(event.start_date*1000).getMonth() === display_date.getMonth() &&
                                                    new Date(event.start_date*1000).getFullYear() === display_date.getFullYear() 
                                                ) return(
                                                    <div className="event_item event_item_first event_item_last" >
                                                        <div>
                                                            { event.title }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="event_item_see_more">
                                            <div> n more </div>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                        {
                            calendar.calendar[2].map((ele, i) => {
                                return (
                                    <div className="calendar_item" onClick={() => { toggle_create_event(ele, 1) }}>
                                        <button className="button secondary_button"> {ele} </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
