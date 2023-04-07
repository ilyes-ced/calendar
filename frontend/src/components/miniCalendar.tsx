import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const test = [0,0,0,0,0,0]

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

function App() {

    return (
        <div id='mini_calendar'>
            <div id='mini_calendar_app_bar'>
                <div>March 2023</div>
                <div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                        <BsChevronLeft  />
                    </div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                        <BsChevronRight  />
                    </div>
                </div>
            </div>
            <div id='mini_calendar_content'>
                <div id='content_left'>
                    <div>&nbsp; </div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div> {/* conditional */}
                </div>
                <div id='content_grid'>
                    <div className='content_grid_row'>
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>

                    <div id='days_grid'>
                        {
                            last_month.map((ele, i) => 
                                <div className=''>
                                    <div>{ ele }</div>
                                </div>
                            )
                        }
                        {
                            this_month.map((ele, i) => 
                                <div className=''>
                                    <div>{ ele }</div>
                                </div>
                            )
                        }
                        {
                            next_month.map((ele, i) => 
                                <div className=''>
                                    <div>{ ele }</div>
                                </div>
                            )
                        }
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default App
