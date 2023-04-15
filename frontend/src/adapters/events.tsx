import axios from 'axios';
import { added_event, init_events } from '../contexts/userData'
import { store } from '../store'



const create_axios = () => {
    console.log(localStorage.getItem('user_token'))
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'X-Authorization': localStorage.getItem('user_token'),
            'Access-Control-Allow-Origin': "*",
        }
    });
}



type event_data = {
    title: string,
    start_date: string,
    end_date: string,
    participants: string,
    location: string,
    description: string,
}

const create_event = (json: event_data) => {
    create_axios().post("/events/create",{
        })
        .then(function (response) {
            store.dispatch(added_event({
                user_data: response.data.user_data,
                token: response.data.token
            }))
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {

        }
    );
}

const init_events_axios = () => {
    create_axios().get("/events/init")
    .then(function (response) {
        console.log(response.data)
        store.dispatch(init_events(response.data))
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {

    }
);
}




export { create_event, init_events_axios }

