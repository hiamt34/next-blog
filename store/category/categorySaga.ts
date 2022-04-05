import { call, put, takeEvery } from "@redux-saga/core/effects";
import { ICategory, ICategorys, Response } from "../../interfaces";
import { categoryService } from "../../services";
import { categoryAction } from "./categorySlice";

function* getAll() {
    try {
        const data: Response<ICategorys<ICategory>[]> = yield call(categoryService.getAll)

        yield put(categoryAction.setCategories(data.payload))
        yield put(categoryAction.fetchDataSuccess())
    } catch (error) {
        yield put(categoryAction.fetchDataFailed())
    }

}



export function* categorySaga() {
    yield takeEvery(categoryAction.fetchData.type, getAll)
}