import axios from 'axios';
import { success } from '../contexts/userData'
import { store } from '../store'



const create_axios = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            //'X-Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJzb21lX2RlZmF1bHRfaWRrIiwiZXhwIjoxNjgxODM2NDk5LCJpYXQiOjE2ODEyMzE2OTksInVzZXJfaWQiOiI2NDM1OGUwYTlhNjEwYzYzNWRkNWQ5N2EiLCJzdWIiOiJkdWRlIn0.NY082UAFXeCWX5dxl6Pw30NHDIj9tzx85m5Lt5qEWZw',
            'Access-Control-Allow-Origin': "*",
        }
    });
}




function login (email: string, password: string) {

    //axios.get(process.env.API_URL)
    create_axios().post("/login",{
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log(response.status);
            console.log(response.data.user_data);
            console.log(response.data.token);
            store.dispatch(success({
                data: response.data.user_data,
                token: response.data.token
            }))
        })
        .catch(function (error) {
            console.log(error.response.status);
            console.log(error);
        })
        .finally(function () {

        }
    );
}


function register (username: string, email: string, password: string) {

    create_axios().post("/register",{
            username: username,
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.status);
        })
        .finally(function () {

        }
    );
}




export { login, register }

