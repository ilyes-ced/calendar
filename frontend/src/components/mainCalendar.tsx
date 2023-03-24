import '../styles/main_calendary.scss'

const arr = [1, 2, 3, 4 , 5,56,5,5,5,5,5,5,5,5,54 , 5,56,5,5,5,5,5,5,5,5,54 , 5,56,5,5,5,5,5,5,5]
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
function App() {

    return (
        <div id='main_calendar'>
            <div id='week_n'>

            </div>
            <div id='calendar_items'>
                {
                    days.map((ele, i) => {
                        return <div className="day_item"> {ele} </div>
                    })
                }
                {
                    arr.map((ele, i) => {
                        return <div className="calendar_item">ele</div>
                    })
                }
            </div>
        </div>
    )
}

export default App
