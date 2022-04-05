import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import categoryReducer from './category/categorySlice';
import instagramReducer from './instagram/instagramSlice';
import postReducer from './post/postSlice';
import rootSaga from './rootSaga';
import tagReducer from './tag/tagSlice';


const rootReducer = combineReducers({
    category: categoryReducer,
    instagram: instagramReducer,
    post: postReducer,
    tag: tagReducer
})



const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    // devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

