import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, ICategorys } from "../../interfaces";
import { RootState } from "../store";

export interface CategoryState {
    loading?: boolean;
    categories: ICategorys<ICategory>[];
};

const initialState: CategoryState = {
    loading: false,
    categories: [],
}

const categorySlice = createSlice({
    name: 'category',
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


        setCategories(state, action: PayloadAction<ICategorys<ICategory>[]>) {            
            state.categories = action.payload
        },
    }
})

//action
export const categoryAction = categorySlice.actions;

//select
export const selectLoading = (state: RootState) => state.category.loading
export const selectCategories = (state: RootState) => state.category.categories

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
