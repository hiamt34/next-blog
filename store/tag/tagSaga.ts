import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ITag, Response } from "../../interfaces";
import { tagService } from "../../services";
import { tagAction } from "./tagSlice";

function* getAll() {
    try {
        const data: Response<ITag[]> = yield call(tagService.getAll)

        yield put(tagAction.setTags(data.payload))
        yield put(tagAction.fetchDataSuccess())
    } catch (error) {
        yield put(tagAction.fetchDataFailed())
    }

}

export function* tagSaga() {
    yield takeEvery(tagAction.fetchData.type, getAll)
}