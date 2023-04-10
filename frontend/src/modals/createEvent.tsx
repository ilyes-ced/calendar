import { MouseEventHandler } from "react";
import { BsXLg } from "react-icons/bs";


function App(props: { close_me: any }) {


    const close = (e: { target: any; currentTarget: any; }) => {
        console.log('clicked')
        if (e.target === e.currentTarget){
            console.log('outside')
            props.close_me()
        }
    }

    return (
        <div id="create_event_modal" onClick={close}>
            <div id="create_event_modal_content">
                <div id='closing_div' >
                    <BsXLg onClick={props.close_me} />
                </div>
                <div id='inputs_div'>
                    <input className="input" type="text" placeholder="hello there change me please" />
                    <input className="input" type="text" placeholder="hello there change me please" />
                    <input className="input" type="text" placeholder="hello there change me please" />
                    <input className="input" type="text" placeholder="hello there change me please" />dza
                    <input className="input" type="text" placeholder="hello there change me please" />
                    <input className="input" type="text" placeholder="hello there change me please" />
                </div>
                <div id='buttons_div'>
                    <button className="button secondary_button">more options</button>
                    <button className="button primary_button">save</button>
                </div>
            </div>
        </div>            
    )
}

export default App
