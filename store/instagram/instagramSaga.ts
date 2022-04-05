import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IInstagram, Response } from "../../interfaces";
import { instagramService } from "../../services";
import { instagramAction } from "./instagramSlice";

function* getAll() {

    try {
        const data: Response<IInstagram[]> = yield call(instagramService.getAll)

        yield put(instagramAction.setInstagrams(data.payload))
        yield put(instagramAction.fetchDataSuccess())
    } catch (error) {
        yield put(instagramAction.fetchDataFailed())
    }

}



export function* instagramSaga() {
    yield takeEvery(instagramAction.fetchData.type, getAll)
}