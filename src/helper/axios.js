import Axios from 'axios';

export const BaseUrl = "https://backend.themajbekasi.com/api/oceanic/pages";
export let TimeOut = 5000;
const axios = Axios.create();

export default axios;