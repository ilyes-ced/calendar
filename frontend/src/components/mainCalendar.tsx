import '../styles/main_calendary.scss'

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
            <div id='week_n'>

            </div>
            <div id='calendar_items'>
                {/*
                    days.map((ele, i) => {
                        return <div className="day_item"> {ele} </div>
                    })
                }
                {
                    calendary_days.map((ele, i) => {
                        return <div className="calendar_item">ele</div>
                    })
                */}
            </div>
        </div>
    )
}

export default App
