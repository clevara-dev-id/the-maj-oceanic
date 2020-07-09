import Axios from 'axios';

export const BaseUrl = process.env.REACT_APP_BASE_URL;
export const BaseUrlImage = process.env.REACT_APP_BASE_URL_IMAGE;
export let TimeOut = 5000;
const axios = Axios.create();

export default axios;