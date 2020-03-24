import { SET_HEAD_BACKGROUND, SET_FOOTER } from "./actionTypes"

// PAGE
export const setHeadBackground = (args) => ({
    type: SET_HEAD_BACKGROUND,
    payload: args
})

export const setFooter = (args) => ({
    type: SET_FOOTER,
    payload: args
})