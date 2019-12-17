import axios from 'src/utils/axios';
import {IS_DEV} from "../config";

if (IS_DEV) {
    axios.interceptors.request.use(request => {
        console.log('Request:', request);
        return request;
    });

    axios.interceptors.response.use(response => {
        console.log('Response:', response);
        return response;
    });
}

