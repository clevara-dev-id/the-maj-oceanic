import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
/** 
 * reducers
 */
import Page from './pages/reducers';
import AnimSlice from './animates/reducers';

const rootReducer = combineReducers({
    page: Page,
    anim: AnimSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
    enhancers: [reduxBatch],
});

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()