import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDDetail, IPost } from "../../interfaces";
import { RootState } from "../store";

export interface IMeta {
    perPage: number;
    total: number;
    currentPage: number;
}

export interface PostState {
    loading?: boolean;
    posts: IPost[];
    post?: IPost;
    meta: IMeta;
    postsHot: IPost[]
};
export interface IParams {
    params: any
}


const initialState: PostState = {
    loading: false,
    posts: [],
    postsHot: [],
    post: undefined,
    meta: {
        perPage: 10,
        currentPage: 1,
        total: 0
    }
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchDataPage(state, action: PayloadAction<IParams>) {                                    
            state.loading = true;
        },
        fetchDataHot(state, action: PayloadAction<IParams>) {                                    
            state.loading = true;
        },
        fetchDataDetail(state, action: PayloadAction<IDDetail>) {            
            state.loading = true;
        },
        fetchDataSuccess(state) {
            state.loading = false;
        },
        fetchDataFailed(state) {
            state.loading = false;
        },


        setPosts(state, action: PayloadAction<IPost[]>) {            
            state.posts = action.payload
        },
        setPostsHot(state, action: PayloadAction<IPost[]>) {            
            state.postsHot = action.payload
        },
        setMeta(state, action: PayloadAction<IMeta>) {            
            state.meta = action.payload
        },
        setPost(state, action: PayloadAction<IPost | undefined>) {            
            state.post = action.payload
        },
    }
})

//action
export const postAction = postSlice.actions;

//select
export const selectLoading = (state: RootState) => state.post.loading
export const selectPosts = (state: RootState) => state.post.posts
export const selectPostsHot = (state: RootState) => state.post.postsHot

export const selectMeta = (state: RootState) => state.post.meta
export const selectPost = (state: RootState) => state.post.post

const postReducer = postSlice.reducer;
export default postReducer;
