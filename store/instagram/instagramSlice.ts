import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstagram } from "../../interfaces";
import { RootState } from "../store";

export interface InstagramState {
    loading?: boolean;
    instagrams: IInstagram[];
};

const initialState: InstagramState = {
    loading: false,
    instagrams: [],
}

const instagramSlice = createSlice({
    name: 'instagram',
    initialState,
    reducers: {
        fetchData(state) {            
            state.loading = true;
        },
        fetchDataSuccess(state) {
            state.loading = false;
        },
        fetchDataFailed(state) {
            state.loading = false;
        },


        setInstagrams(state, action: PayloadAction<IInstagram[]>) {            
            state.instagrams = action.payload
        },
    }
})

//action
export const instagramAction = instagramSlice.actions;

//select
export const selectLoading = (state: RootState) => state.instagram.loading
export const selectInstagrams = (state: RootState) => state.instagram.instagrams

const instagramReducer = instagramSlice.reducer;
export default instagramReducer;
