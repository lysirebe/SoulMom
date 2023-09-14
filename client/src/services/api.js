import axios from 'axios';

const BASE_URL = 'http://localhost:5000/authentication/';

//  const login = (data) =>{
//     return axios
//     .post(BASE_URL + "login", {data})
//     .then((res) => {
//         if(res.data.token){
//             localStorage.setItem('user', JSON.stringify(res.data))
//         }

//         return res.data;
//     })
// }

// const getUser = () => {
//     return JSON.parse(localStorage.getItem("user"));

// }

// const AuthService = {login, getUser}

// export {AuthService }

export const login = (data) =>{
        return axios
        .post(BASE_URL + "login", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }