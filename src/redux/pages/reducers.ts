import _ from 'lodash';
import { 
    createReducer,
    PayloadAction,
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
/** types and action */
import { PageState, NavigationState } from './types';
import { addPages, getAllPage } from './actions';
import axios from '../../helper/axios';

/** initial value for pages reducer */
const initialState: PageState & NavigationState = {
    page_name: "",
    data: {
        heading: "initial",
        text: "initial text",
        images: "oceanic-the-vessel-introductions\\June2020\\OxEgZAdzTgq2ZNWvOfdo.png",
    },
    navigations: [],
    loading: 'idle',
};

export const PageReducer = createReducer(initialState, {
    [addPages.type]: (state, action: PayloadAction<PageState>): void => {
        state.page_name = action.payload.page_name || "";
        state.data = action.payload.data;
    },
    [getAllPage.type]: (state, action: PayloadAction<NavigationState>) => {
        state.navigations = action.payload.navigations;
    }
});

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
        pageNavigationsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.navigations = action.payload
            }
        }
    },
});

export default PageSlice.reducer;
export const { pageStatus, pageNavigationsReceived } = PageSlice.actions;
