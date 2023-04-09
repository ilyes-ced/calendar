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
