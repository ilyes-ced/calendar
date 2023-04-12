import axios from 'axios';



const create_axios = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'X-Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJzb21lX2RlZmF1bHRfaWRrIiwiZXhwIjoxNjgxODM2NDk5LCJpYXQiOjE2ODEyMzE2OTksInVzZXJfaWQiOiI2NDM1OGUwYTlhNjEwYzYzNWRkNWQ5N2EiLCJzdWIiOiJkdWRlIn0.NY082UAFXeCWX5dxl6Pw30NHDIj9tzx85m5Lt5qEWZw',
            'Access-Control-Allow-Origin': "*"
        }
    });
}



export function login(email: string, password: string){

    //axios.get(process.env.API_URL)
    create_axios().post("/login",{
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response.status);
            console.log(error);
        })
        .finally(function () {

        }
    );
}


export function register(username: string, email: string, password: string){

    //axios.get(process.env.API_URL)
    create_axios().post("/login",{
            username: username,
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response.status);
            console.log(error);
        })
        .finally(function () {

        }
    );
}






