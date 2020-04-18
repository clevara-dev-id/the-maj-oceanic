import { SET_HEAD_BACKGROUND, SET_FOOTER } from "../action/actionTypes"
import HeadBg from '../../assets/img/header/1.png'

const initalState = {
    head_background: {
        image: HeadBg,
        text: "An Epicurean Journey of the Ages",
    },
    footer: "primary",
}

const pageReducers = (state = initalState, action) => {
    switch (action.type) {
        case SET_HEAD_BACKGROUND:
            return {
                ...state,
                head_background: action.payload
            }
        
        case SET_FOOTER:
            return {
                ...state,
                footer: action.payload
            }
        
        default:
            return state
    }
}

export default pageReducers