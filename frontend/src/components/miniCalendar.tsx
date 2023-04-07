import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const test = [0,0,0,0,0,0]


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
                    <div>6</div>
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
                    {
                        test.map((ele, i) => 
                            <div className='content_grid_row'>
                                <div>{(i+1) * 1}</div>
                                <div>{(i+1) * 2}</div>
                                <div>{(i+1) * 3}</div>
                                <div>{(i+1) * 4}</div>
                                <div>{(i+1) * 5}</div>
                                <div>{(i+1) * 6}</div>
                                <div>{(i+1) * 7}</div>
                            </div>
                        )
                    }
                </div>
                
            </div>
        </div>
    )
}

export default App
