import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


let test_calendar: number[]  = [];



//var now = new Date();
//var kk = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
//var firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
//console.log(kk)
//console.log(firstDay)
//console.log(firstDay.getDate())
//console.log(now.toLocaleDateString(undefined, { weekday: 'long' }))
//now.setDate(now.getDate() + 1);

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


const init_calendar = () => {
    var now = new Date();
    console.log(now)
    now = new Date(now.getFullYear(), now.getMonth(), 1);
    var first_day = new Date(now.getFullYear(), now.getMonth(), 1);
    console.log(first_day)
    const current_month = now.getMonth()
    var day_number = 1
    var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })

    if(first_day_name === 'Sunday'){

    }else if(first_day_name === 'Monday'){
        test_calendar.push(0)
    }else if(first_day_name === 'Tuesday'){
        test_calendar.push(0)
        test_calendar.push(0)
    }else if(first_day_name === 'Wednesday'){
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
    }else if(first_day_name === 'Thursday'){
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
    }else if(first_day_name === 'Friday'){
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
    }else if(first_day_name === 'Saturday'){
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
        test_calendar.push(0)
    }

    while (now.getMonth() === current_month){

        now.setDate(now.getDate() + 1);
        var first_day_name = now.toLocaleDateString(undefined, { weekday: 'long' })
        
        


        if(first_day_name === 'Sunday'){
            test_calendar.push(day_number)
            day_number++
        }else if(first_day_name === 'Monday'){
            test_calendar.push(day_number)
            day_number++
        }else if(first_day_name === 'Tuesday'){
            test_calendar.push(day_number)
            day_number++
        }else if(first_day_name === 'Wednesday'){
            test_calendar.push(day_number)
            day_number++
        }else if(first_day_name === 'Thursday'){
            test_calendar.push(day_number)
            day_number++
        }else if(first_day_name === 'Friday'){
            test_calendar.push(day_number)
            day_number++
        }else if(first_day_name === 'Saturday'){
            test_calendar.push(day_number)
            day_number++
        }

    }


        
}
init_calendar()
console.log(test_calendar)

function App() {

    return (
        <div id='main_calendar'>
            <div id='calendar_app_bar'>
                <div>
                    <button className='button secondary_button'>today</button>
                    <div className='v_divider'></div>   
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                        <BsChevronLeft  />
                    </div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                        <BsChevronRight  />
                    </div>
                    <div className='v_divider'></div>
                    <button className='button secondary_button'>mars 23</button>
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
                            test_calendar.map((ele, i) => {
                                return <div className="calendar_item">
                                    <button className="button secondary_button"> {test_calendar[i]} </button>
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
