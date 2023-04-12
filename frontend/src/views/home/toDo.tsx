import { useRef, useState } from "react"
import {BsFillPencilFill, BsChevronLeft, BsPlusLg} from  "react-icons/bs"


function App() {


    const sub_task_input_ref = useRef<HTMLInputElement>(null)
    const [show_sub_task_input, set_show_sub_task_input] = useState(false)

    const toggle_sub_task_input =() => {
        set_show_sub_task_input(!show_sub_task_input)
    }

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
                    <div className='add_sub_task' onClick={toggle_sub_task_input} >+ add sub task</div>
                    {
                        show_sub_task_input ? <input ref={sub_task_input_ref} id="show_sub_task_input" type="text" /> : ""
                    }
                    <div className="sub_tasks">

                    </div>
                </div>
            
            </div>

       
       

        </div>
    )
}

export default App
