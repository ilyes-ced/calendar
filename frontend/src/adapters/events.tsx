import axios from 'axios';
import { added_event, init_events } from '../contexts/userData'
import { store } from '../store'



const create_axios = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, POST",
            'X-Authorization': localStorage.getItem('user_token'),
        }
    });
}



type event_data = {
    title: string,
    start_date: number,
    end_date: number,
    start_time: number,
    end_time: number,
    participants: number[],
    location: string,
    notifications: number[],
    description: string,
    repeat: false
}

const create_event = (json: event_data) => {
    console.log(json)
    create_axios().post("/events/create",{
        title: json.title,
        start_date: json.start_date,
        end_date: json.end_date,
        start_time: json.start_time | 0,
        end_time: json.end_time | 0,
        participants: [],
        location: json.location,
        description: json.description,
        notifications: [],
        repeat: false
    })
        .then(function (response) {
            store.dispatch(added_event({
                event: response.data.inserted_id,
            }))
        })
        .catch(function (error) {
            console.log(error)
        })
}

const init_events_axios = (start: number, end: number) => {
    create_axios().get("/events/init", {
        params: {
          start: start,
          end: end
        }
      })
        .then(function (response) {
            store.dispatch(init_events(response.data))
        })
        .catch(function (error) {
            console.log(error)
            console.log(error.data)
        })


}




export { create_event, init_events_axios }

