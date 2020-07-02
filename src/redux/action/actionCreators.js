import axios, { BaseUrl, TimeOut } from "../../helper/axios";
import { SET_HEAD_BACKGROUND, SET_FOOTER, SET_PAGES } from "./actionTypes";

export const setPages = (args1, args2) => ({
    type: SET_PAGES,
    status: args1,
    data: args2
});

export const setHeadBackground = (args) => ({
    type: SET_HEAD_BACKGROUND,
    payload: args
});

export const setFooter = (args) => ({
    type: SET_FOOTER,
    payload: args
});


export const getPages = () => (
    new Promise((resolve, reject) => {
        axios.get(BaseUrl, { timeout: TimeOut })
        .then(res => resolve(res))
        .catch(e => reject(e));
    })    
);

export const setActivePage = args => (
    new Promise((resolve, reject) => {
        resolve(args)
    })
);