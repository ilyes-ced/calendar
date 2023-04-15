import axios from 'axios';
import { added_event } from '../contexts/userData'
import { store } from '../store'



const create_axios = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'X-Authorization': localStorage.getItem('user_token'),
            'Access-Control-Allow-Origin': "*",
        }
    });
}




function create_event () {

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






export { create_event }

