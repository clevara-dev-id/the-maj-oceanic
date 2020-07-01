import { createAction } from '@reduxjs/toolkit';
import { PageState, NavigationState } from './types';

/**
 * Get All Page Action
 */
export const getAllPage = createAction<NavigationState, "getAllPage">("getAllPage");
/**
 * Add Pages Action
 */
export const addPages = createAction<PageState, "addPages">("addPages");
