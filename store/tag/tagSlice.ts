import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag } from "../../interfaces";
import { RootState } from "../store";

export interface TagState {
    loading?: boolean;
    tags: ITag[];
};

const initialState: TagState = {
    loading: false,
    tags: [],
}

const tagSlice = createSlice({
    name: 'tag',
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


        setTags(state, action: PayloadAction<ITag[]>) {            
            state.tags = action.payload
        },
    }
})

//action
export const tagAction = tagSlice.actions;

//select
export const selectLoading = (state: RootState) => state.tag.loading
export const selectTags = (state: RootState) => state.tag.tags

const tagReducer = tagSlice.reducer;
export default tagReducer;
