import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IDDetail, IPost, Response } from "../../interfaces";
import { postService } from "../../services";
import { IParams, postAction } from "./postSlice";
interface IPosts {
    payload: IPost[];
    meta: {
        currentPage: number
        perPage: number
        total: number
    }
}

function* getDetail(action: PayloadAction<IDDetail>) {
    try {
        const data: Response<IPost> = yield call(postService.getDetail, action.payload._id)

        yield put(postAction.setPost(data.payload))
        yield put(postAction.fetchDataSuccess())
    } catch (error) {
        yield put(postAction.fetchDataFailed())
    }

}

function* fetchDataPage(action: PayloadAction<IParams>) {
    try {        
        const data: Response<IPosts> = yield call(postService.getAllPost, action.payload.params)
                
        yield put(postAction.setPosts(data.payload.payload))
        yield put(postAction.setMeta(data.payload.meta))
        yield put(postAction.fetchDataSuccess())
    } catch (error) {
        yield put(postAction.fetchDataFailed())
    }
}

function* fetchDataHot(action: PayloadAction<IParams>) {
    try {        
        const data: Response<IPosts> = yield call(postService.getAllPost, action.payload.params)
                
        yield put(postAction.setPostsHot(data.payload.payload))
        yield put(postAction.fetchDataSuccess())
    } catch (error) {
        yield put(postAction.fetchDataFailed())
    }
}


export function* postSaga() {
    yield takeEvery(postAction.fetchDataDetail.type, getDetail)
    yield takeEvery(postAction.fetchDataPage.type, fetchDataPage)
    yield takeEvery(postAction.fetchDataHot.type, fetchDataHot)
}