import axios from "axios";

axios.defaults.baseURL = 'https://drf-project-293f81595c35.herokuapp.com/'
axios.defaults.headers.post['Content Type'] = 'mulitpart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();
