import { SET_HEAD_BACKGROUND, SET_FOOTER, SET_PAGES, SET_COMPONENTS_PAGE } from "../action/actionTypes"
import HeadBg from '../../assets/img/header/1.png'

const initalState = {
    pages: {
        status: "",
        received_at: "",
        data: [{
            id: 0,
            page: "",
            path: "",
            published: 0,
            websites_id: 0,
            created_at: null,
            updated_at: null,
        }]
    },
    active_page: {
        key: "",
        pathname: "",
    },
    components_page: {
        status: "",
        received_at: "",
        page_id: 0,
        page_name: "",
        data: [],
    },
    head_background: {
        image: HeadBg,
        text: "An Epicurean Journey of the Ages",
    },
    footer: "primary",
}

const pageReducers = (state = initalState, action) => {
    let event = new Date();
    const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    switch (action.type) {
        case SET_PAGES:
            return {
                ...state,
                pages: {
                    received_at: event.toLocaleDateString("id-ID", option),
                    status: action.status,
                    data: action.data,
                }
            };

        case SET_COMPONENTS_PAGE:
            return {
                ...state,
                components_page: action.payload
            };

        case SET_HEAD_BACKGROUND:
            return {
                ...state,
                head_background: action.payload
            };
        
        case SET_FOOTER:
            return {
                ...state,
                footer: action.payload
            };
        
        default:
            return state;
    }
}

export default pageReducers