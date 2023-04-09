import { useAppSelector, useAppDispatch } from '../hook';
import { decrement_month, increment_month } from '../contexts/thisMonth';
import { useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

let last_month: number[]  = [];
let this_month: number[]  = [];
let next_month: number[]  = [];

let current_date = new Date();



function App() {



    const calendar = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
    useEffect(() => {

    }, [])

    const add_month = () => {
        dispatch(increment_month())
    }
    const remove_month = () => {
        dispatch(decrement_month())
    }

    return (
        <div id='mini_calendar'>
            <div id='mini_calendar_app_bar'>
                <div>March 2023</div>
                <div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} onClick={remove_month} >
                        <BsChevronLeft  />
                    </div>
                    <div className="button secondary_button" style={{paddingRight:'10px',paddingLeft:'10px'}} onClick={add_month} >
                        <BsChevronRight  />
                    </div>
                </div>
            </div>
            <div id='mini_calendar_content'>
                <div id='content_left'>
                    <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? "14.2857142857%" : "16.666666%"  }} >&nbsp;</div>
                    <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? "14.2857142857%" : "16.666666%"  }} >1</div>
                    <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? "14.2857142857%" : "16.666666%"  }} >2</div>
                    <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? "14.2857142857%" : "16.666666%"  }} >3</div>
                    <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? "14.2857142857%" : "16.666666%"  }} >4</div>
                    <div style={{height: calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? "14.2857142857%" : "16.666666%"  }} >5</div>
                    { calendar.calendar[0].length + calendar.calendar[1].length + calendar.calendar[2].length > 35 ? <div style={{height: "14.2857142857%"}} >6</div> : "" }

                    
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
                            calendar.calendar.map((month, i) => {
                                return month.map((ele, i) => {
                                    return <div className=''>
                                        <div>{ ele }</div>
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
