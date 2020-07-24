import { createSlice } from '@reduxjs/toolkit';

/* initial value anim reducer */
export type AnimateInitialType = {
    navbar: {
        isFire: boolean;
    };
};

const initialState = {
    navbar: {
        isFire: false
    }
};

/* anim slice */
const AnimSlice = createSlice({
    name: "anim",
    initialState,
    reducers: {
        navbarGotFire(state, action) {
            state.navbar.isFire = action.payload;
        }
    }
});

export default AnimSlice.reducer;
export const { navbarGotFire } = AnimSlice.actions;
