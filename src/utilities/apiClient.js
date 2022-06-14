import axios from 'axios';
import Contant from './Contants';

const axiosClient = axios.create({
    baseURL: `${Contant.HOST}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status === 403) {
            window.location.href = "http://localhost:3000/";
        }
        console.error("Looks like there was a problem.Status Code: " + res.status);
        return Promise.reject(error);
    }
)


export default axiosClient;
