import {BsFillPencilFill, BsChevronLeft, BsPlusLg} from  "react-icons/bs"


function App() {

    return (
        <div id='todo_main' >
            
           
           

            <div className="category_box">
                <div className="cat_header">
                    <div className='cat_title'>
                        <div>title</div>
                        <div>0</div>
                    </div>
                    <div className='cat_icons'>
                        <BsFillPencilFill />
                        <BsChevronLeft />
                        <BsPlusLg />
                    </div>
                </div>

                <div className='task'>
                    <div>tyask name</div>
                    <div className='add_sub_task'>+ add sub task</div>
                    <div className='icons_bar'>
                        
                    </div>
                </div>
            
            </div>

       
       

        </div>
    )
}

export default App
