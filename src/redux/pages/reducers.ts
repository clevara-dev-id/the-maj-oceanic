import { 
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
/** types and action */
import { PageState, NavigationState, PageItem } from './types';
import StaticTab, { Tabs } from '../../static/tabs';

/** initial value for pages reducer */
export type InitialStatePageProps = PageState & NavigationState & {
    tabs?: Tabs 
};
const initialState: InitialStatePageProps = {
    activePage: undefined,
    pages: [{
        id: 0,
        page_name: "initial",
        heading: "initial",
        text: "initial text",
        images: "oceanic-the-vessel-introductions\\June2020\\OxEgZAdzTgq2ZNWvOfdo.png"
    }],
    navigations: [],
    tabs: StaticTab,
    loading: 'idle',
};

// Page Slice

const PageSlice = createSlice({
    name: "pages",
    initialState,
    reducers: {
        pageStatus(state, action: PayloadAction<string | undefined>) {
            if (state.loading === 'idle') {
                state.loading = action.payload || 'pending'
            }
        },
        pageSetActive(state, action: PayloadAction<PageItem | undefined>) {
            state.activePage = action.payload
        },
        pageNavigationsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.navigations = action.payload;
            }
        },
        pageHomeReceived(state, action: PayloadAction<PageItem>) {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.pages.push({
                    id: state.pages.length + 1,
                    page_name: "home",
                    heading: action.payload.heading,
                    text: action.payload.text,
                    images: action.payload.images,
                    slider: action.payload.slider,
                    carousel_card_text: action.payload.carousel_card_text
                });
            }
        },
        pageSpecReceived(state, action: PayloadAction<any>) {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.pages.push({
                    id: state.pages.length + 1,
                    page_name: "spesification",
                    heading: action.payload.heading,
                    text: action.payload.text,
                    images: action.payload.images,
                    slider: action.payload.slider,
                    data: action.payload.data
                });
            }
        }
    },
});

export default PageSlice.reducer;
export const {
    pageStatus,
    pageNavigationsReceived,
    pageHomeReceived,
    pageSpecReceived,
    pageSetActive
} = PageSlice.actions;
