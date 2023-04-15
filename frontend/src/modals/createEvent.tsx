import { BsXLg, BsClockHistory, BsPeople, BsGeoAlt, BsTextLeft } from "react-icons/bs";
import { create_event } from "../adapters/events"
import { useRef } from "react";

function App(props: { close_me: any, start_date: Date }) {


    const close = (e: { target: any; currentTarget: any; }) => {
        if (e.target === e.currentTarget){
            props.close_me()
        }
    }

    const title = useRef(null)
    const start_date = useRef(null)
    const end_date = useRef(null)
    const participants = useRef(null)
    const location = useRef(null)
    const description = useRef(null)

    const submit_event = (e) => {
        e.preventDefault();
        const form = e.target;
        const form_date = new FormData(form);
        const data_json = Object.fromEntries(form_date);

        //console.log(title.current.value)
        //console.log(start_date.current.value)
        //console.log(end_date.current.value)
        //console.log(participants.current.value)
        //console.log(location.current.value)
        //console.log(description.current.value)
//
        //create_event({
        //    title.current.value
        //    start_date.current.value
        //    end_date.current.value
        //    participants.current.value
        //    location.current.value
        //    description.current.value
        //})
    }

    return (
        <div id="create_event_modal" onClick={close}>
            <div id="create_event_modal_content">
                <form action="/" method="Post" onSubmit={submit_event}>
                    <div id='closing_div' >
                        <BsXLg onClick={props.close_me} />
                    </div>
                    <div id='inputs_div'>
                        <div>
                            <div></div>
                            <input ref={title} name='title' className="input" type="text" placeholder="Title" required />
                        </div>
                        <div>
                            <BsClockHistory/>
                            <input ref={start_date} name='start_date' className="input" type="date" value={props.start_date.toISOString().substring(0,10)} />
                        </div>
                        <div>
                            <div></div>
                            <input ref={end_date} name='end_date' className="input" type="date" min={props.start_date.toISOString().substring(0,10)} />
                        </div>
                        <div>
                            <BsPeople/>
                            <input ref={participants} name='participants' className="input" type="text" placeholder="participants" />
                        </div>
                        <div>
                            <BsGeoAlt/>
                            <input ref={location} name='location' className="input" type="text" placeholder="Location" />
                        </div>
                        <div>
                            <BsTextLeft/>
                            <input ref={description} name='description' className="input" type="text" placeholder="Descrption" />
                        </div>
                    </div>
                    <div id='buttons_div'>
                        <button className="button secondary_button">more options</button>
                        <button className="button primary_button" type="submit" >save</button>
                    </div>
                </form>
            </div>
        </div>            
    )
}

export default App
