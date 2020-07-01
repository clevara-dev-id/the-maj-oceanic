import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
/** 
 * reducers
 */
import Page, { PageReducer } from './pages/reducers';

const rootReducer = combineReducers({
    page: Page,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== "production",
    enhancers: [reduxBatch],
});

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()