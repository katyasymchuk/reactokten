import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
   getById:(id)=>axiosService.get(`${urls.comments}/${id}`)

}

export {
    commentsService}