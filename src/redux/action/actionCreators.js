import Axios from 'axios';
import { SET_HEAD_BACKGROUND, SET_FOOTER, SET_PAGES } from "./actionTypes";

// PAGE
export const setHeadBackground = (args) => ({
    type: SET_HEAD_BACKGROUND,
    payload: args
});

export const setFooter = (args) => ({
    type: SET_FOOTER,
    payload: args
});

export const setPages = () => dispatch => {
    let event = new Date();
    const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const getPages = (args) => {
        return new Promise((resolve, reject) => {
            Axios(args)
            .then(res => resolve(res))
            .catch(e => reject(e));
        });
    };

    getPages('https://backend.themajbekasi.com/api/oceanic/get_all_page')
    .then(res => {
        dispatch({
            type: SET_PAGES,
            payload: {
                status: res.statusText,
                received_at: event.toLocaleDateString('id', option),
                data: res.data.pages
            }
        });
    })
    .catch(e => {
        dispatch({
            type: SET_PAGES,
            payload: {
                status: e.response.statusText,
                received_at: event.toLocaleDateString('id', option),
                data: []
            }
        });
    });
};