import { current } from "@reduxjs/toolkit";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

let last_month: number[]  = [];
let this_month: number[]  = [];
let next_month: number[]  = [];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const month_names = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let current_date = new Date();


const init_calendar = () => {
    var now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), 1);
    var first_day = new Date(now.getFullYear(), now.getMonth(), 1);
    const current_month = now.getMonth()
    var day_number = 1
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })
    var tempo_date =  new Date();
    tempo_date = new Date(now.getFullYear(), now.getMonth(), 1);
    if(first_day_name === 'Monday'){
        for (let i = 0; i < 1; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 1);
    }else if(first_day_name === 'Tuesday'){
        for (let i = 0; i < 2; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 2);
    }else if(first_day_name === 'Wednesday'){
        for (let i = 0; i < 3; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 3);
    }else if(first_day_name === 'Thursday'){
        for (let i = 0; i < 4; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 4);
    }else if(first_day_name === 'Friday'){
        for (let i = 0; i < 5; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 5);
    }else if(first_day_name === 'Saturday'){
        for (let i = 0; i < 6; i++) {
            now.setDate(now.getDate() - 1);
                last_month = [now.getDate(), ...last_month]
        }
        now.setDate(now.getDate() + 6);
    }
    while (now.getMonth() === current_month){

        now.setDate(now.getDate() + 1);
        var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })
        
        


        if(first_day_name === 'Sunday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Monday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Tuesday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Wednesday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Thursday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Friday'){
            this_month.push(day_number)
            day_number++
        }else if(first_day_name === 'Saturday'){
            this_month.push(day_number)
            day_number++
        }

    }
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })

    if(first_day_name === 'Monday'){
        for (let i = 0; i < 6; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Tuesday'){
        for (let i = 0; i < 5; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Wednesday'){
        for (let i = 0; i < 4; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Thursday'){
        for (let i = 0; i < 3; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Friday'){
        for (let i = 0; i < 5; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }else if(first_day_name === 'Saturday'){
        for (let i = 0; i < 1; i++) {
            next_month.push(now.getDate())
            now.setDate(now.getDate() + 1);
        }
    }
        
}
init_calendar()
console.log(this_month)

console.log(last_month)
console.log(this_month)
console.log(next_month)
function App() {

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
                            last_month.map((ele, i) => {
                                return <div className="calendar_item">
                                    <button className="button secondary_button"> {last_month[i]} </button>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                  
                                </div>
                            })
                        }
                        {
                            this_month.map((ele, i) => {
                                return <div className="calendar_item">
                                    <button className="button secondary_button"> {this_month[i]} </button>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                  
                                </div>
                            })
                        }
                        {
                            next_month.map((ele, i) => {
                                return <div className="calendar_item">
                                    <button className="button secondary_button"> {next_month[i]} </button>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                  
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
