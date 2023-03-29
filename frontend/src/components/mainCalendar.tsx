import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import '../styles/main_calendar.scss'


let test_calendar= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];


let calendary_days1: [number];
let calendary_days2: [number];
let calendary_days3: [number];
let calendary_days4: [number];
let calendary_days5: [number];
let calendary_days6: [number];
let calendary_days7: [number];
let calendary_days8: [number];
let calendary_days9: [number];
let calendary_days10: [number];
let calendary_days11: [number];
let calendary_days12: [number];
let calendary_days = [
    [], [], [], [], [], [], [], [], [], [], [], []
]

function fill_calendar(year: number){
    var date = new Date(year, 0, 1);
    var month = date.getMonth();
    console.log(date, month)
    while (date.getMonth() === month) {
        var day: number = date.getDate()
        calendary_days[month].push(day);
        date.setDate(date.getDate() + 1);
    }
}


var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth());
var mm2 = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

fill_calendar(yyyy)
console.log(mm);
console.log(mm2);


//var dd = String(today.getDate()).padStart(2, '0');
//var mm = String(today.getMonth() + 1).padStart(2, '0');
//var yyyy = today.getFullYear();
//let stoday = mm + '/' + dd + '/' + yyyy;
//console.log(yyyy);
//
//today.setDate( today.getDate() - 6 );
//today.setFullYear( today.getFullYear() - 1 );
//console.log((today.getMonth() ) + '/' + (today.getDate()) + '/' + (today.getFullYear()));
//stoday = mm + '/' + dd + '/' + yyyy;
//console.log(stoday);
//

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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
                    <div>Thu</div>
                    <div>Thu</div>
                    <div>Thu</div>
                    <div>Thu</div>
                    <div>Thu</div>
                    <div>Thu</div>
                    <div>Thu</div>
                </div>
                <div id='calendar'>
                    <div id='week_n'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div id='calendar_items'>
                        {
                            test_calendar.map((ele, i) => {
                                return <div className="calendar_item">
                                    <button className="button secondary_button"> {i} </button>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
                                    <div className="event_item">
                                        <div>event name</div>
                                    </div>
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
