import axios from 'axios';
import {getLaunches} from "./launches.api.service";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
});

const getLaunchesAxios = () => {
    return axiosInstance.get()
}

export {getLaunchesAxios}
